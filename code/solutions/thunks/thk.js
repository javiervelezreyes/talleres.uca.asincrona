module.exports = (function (global) {
       
    let THK  = {}
    let NULL = void 0
    
    THK.lCurry = function lCurry (fn, n) {

        let l = n || fn.length
        return (function aux (args) {
            return args.length >= l ?
                fn.apply(this, args) :
                function (...rest) {
                    return aux([...args, ...rest])
                }
        })([]) 
        
    }
    
    THK.rCurry = function rCurry (fn, n) {

        let l = n || fn.length
        return (function aux (args) {
            return args.length >= l ?
                fn.apply(this, args) :
                function (...rest) {
                    return aux([...rest, ...args])
                }
        })([]) 
        
    }
        
    THK.async = function async (fn, ms) {
        
        return THK.rCurry (function (...args) {
            return function (hn) {
                global.setTimeout (function () {
                    try {
                        let r = fn.apply (NULL, args)
                        hn (NULL, r)
                    } catch (e) {
                        hn (e.message)
                    }
                }, ms || 100)
            }
        }, fn.length)

    }
        
    THK.serie = function serie (...gns) {
        
        let [f, ...fns] = gns
        return function (cb) {
            let hn = fns
                .reverse ()
                .reduce (function (cb, fn) {
                    return function (e, x) {
                        if (!e) fn (x)(cb)
                    }
                }, cb)
            f (hn)
        }
        
    }
    
    THK.all = function all (...gns) {

        return function (cb) {
            let n  = 0
            let xs = []
            let es = []
            let hn = function (idx) {
                return function (e, x) { 
                    if (!e) xs[idx] = x
                    else    es[idx] = e
                    n++
                    if (n === gns.length) cb (es, xs)
                }
            }
            gns.forEach (function (gn, idx) {
                gn(hn (idx))
            })
        }
      
    }
    
    THK.Log = function Log (ref) {
        
        return function (error, data) {
            if (error) console.log ('Test #%s [error] - %s', ref, error)
            if (data)  console.log ('Test #%s [ok]    - %s', ref, data)
        }
        
    }
    
    
    return THK

})(global || window)