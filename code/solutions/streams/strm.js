module.exports = (function (global) {
       
    let STRM  = {}
    let NULL  = void 0
    let FNULL = () => {}
    
    let isStrm = (s) => s instanceof STRM.Stream

    STRM.Stream = class Stream {
    
        constructor () {
            this.fns = []
        }        
        
        reduce (fn, b) {
            this.fns.push (function (hn) {
                return function (xs) {
                    let rn = xs.reduce (function (cb, x) {
                        return function (v) {
                            fn (x, v)(cb)
                        }
                    }, hn)
                    rn(b)
                }
            })
            return this
        }
        
        map (fn) {
            this.fns.push (function (hn) {
                return function (x) {
                    fn (x)(hn)
                }
            })
            return this
        }

        take (n) {
            this.fns.push (function (hn) {
                let xs = []
                return function (x) {
                    xs.push (x)
                    if (xs.length === n) {
                        hn (xs) 
                        xs = []
                    }
                }
            })
            return this
        }

        skip (n) {
            this.fns.push (function (hn) {
                let idx = 0
                return function (x) {
                    if (idx < n) idx++
                    else fn (x, hn)
                }
            })
            return this
        }
            
        end (tn) {
            let gn = tn ?
                isStrm (tn) ?
                    function (v) { tn.next (v) } :
                    tn :
                FNULL
             
            this.next = this.fns
                .reverse ()
                .reduce (function (cb, fn) {
                    return fn (cb)
                }, gn)
            
            return function (...args) {
                args.forEach (function (x) {
                    this.next (x)
                }, this)
            }.bind (this)
        }
    
    }

    STRM.lCurry = function lCurry (fn, n) {

        let l = n || fn.length
        return (function aux (args) {
            return args.length >= l ?
                fn.apply(this, args) :
                function (...rest) {
                    return aux([...args, ...rest])
                }
        })([]) 
        
    }
    
    STRM.rCurry = function rCurry (fn, n) {

        let l = n || fn.length
        return (function aux (args) {
            return args.length >= l ?
                fn.apply(this, args) :
                function (...rest) {
                    return aux([...rest, ...args])
                }
        })([]) 
        
    }
    
    STRM.async = function async (fn, ms) {
        
        return STRM.rCurry (function (...args) {
            return function (hn) {
                global.setTimeout (function () {
                    try {
                        let r = fn.apply (NULL, args)
                        hn (r)
                    } catch (e) {}
                }, ms || 100)
            }
        }, fn.length)
    
    }
    
  
    STRM.Log = function Log (ref) {
        
        return function log (...args) {
            console.log ('Test #%s [ok] - %s', ref, ...args)
        }
        
    }
    
    
    return STRM

})(global || window)