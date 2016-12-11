module.exports = (function (global) {
       
    let CTHK = {}
    let NULL = void 0

    let isHn   = (step) => typeof (step.value) === 'function'
    let getHn  = (step) => step.value
    let isIt   = (step) => step.value instanceof Array
    let getHns = (step) => step.value
    
    CTHK.go = function go (gn) {

        let code = gn ();
        (function resolve (step) {

            if (step.done) return step.value
            else {
                if (isHn (step)) {
                    getHn(step)(function (error, data) {
                        if (error) code.throw (new Error (error))
                        else resolve (code.next (data))
                    })
                }
                if (isIt (step)) {
                    let xs = []
                    let es = []
                    let n  = 0
                    let hns = getHns(step)
                    
                    hns.forEach (function (hn, idx) {
                        hn (function (error, data) {
                            if (error) es[idx] = error
                            else xs[idx] = data
                            n++
                            if (n === hns.length)
                                if (es.length > 0) code.throw (new Error (es[0]))
                                else resolve (code.next (xs))
                        })
                    })
                }
            }

        })(code.next ())
        
    }
    
    CTHK.async = function async (fn, ms) {
        
        return function (...args) {
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
        }

    }
    
    CTHK.Log = function Log (ref) {
        
        return {
            log : function (...data) {
                console.log ('Test #%s [ok]    - %s', ref, data)
            },
            error : function (...error) {
                if (error) console.log ('Test #%s [error] - %s', ref, error)
            }
        }
        
    }
        
    
    
    return CTHK

})(global || window)