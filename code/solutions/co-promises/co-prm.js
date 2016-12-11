module.exports = (function (global) {
       
    let CPRM = {}
    let NULL = void 0

    let isPrm   = (step) => step.value instanceof Promise
    let getPrm  = (step) => step.value
    let isIt    = (step) => step.value instanceof Array
    let getPrms = (step) => step.value
    
    
    CPRM.go = function go (gn) {

        let code = gn ();
        (function resolve (step) {

            if (step.done) return step.value
            else {
                if (isPrm (step)) {
                    getPrm (step)
                        .then  (function (v) { resolve (code.next (v)) })
                        .catch (function (e) { code.throw (new Error (e)) })
                }
                if (isIt (step)) {
                    Promise
                        .all (getPrms (step))
                        .then (function (xs) { resolve (code.next (xs)) })
                        .catch (function (e) { code.throw (new Error (e)) })
                }
            }

        })(code.next ())
        
    }
    
    CPRM.async = function async (fn, ms) {
        
        return function (...args) {
            return new Promise (function (resolve, reject) {
                global.setTimeout (function () {
                    try {
                        let r = fn.apply (NULL, args)
                        resolve (r)
                    } catch (e) {
                        reject (e)
                    }
                }, ms || 100)
            })
        }

    }
    
    CPRM.Log = function Log (ref) {
        
        return {
            log : function (...data) {
                console.log ('Test #%s [ok]    - %s', ref, data)
            },
            error : function (...error) {
                if (error) console.log ('Test #%s [error] - %s', ref, error)
            }
        }
        
    }
        
    
    
    return CPRM

})(global || window)