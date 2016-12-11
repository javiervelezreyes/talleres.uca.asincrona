module.exports = (function (global) {
       
    let CPRM = {}
    let NULL = void 0

    let isPrm   = (step) => step.value instanceof Promise
    let getPrm  = (step) => step.value
    let isIt    = (step) => step.value instanceof Array
    let getPrms = (step) => step.value
    
    
    CPRM.go = function go (gn) {


        
    }
    
    CPRM.async = function async (fn, ms) {
        


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