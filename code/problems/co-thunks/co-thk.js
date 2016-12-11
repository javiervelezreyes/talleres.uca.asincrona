module.exports = (function (global) {
       
    let CTHK = {}
    let NULL = void 0

    let isHn   = (step) => typeof (step.value) === 'function'
    let getHn  = (step) => step.value
    let isIt   = (step) => step.value instanceof Array
    let getHns = (step) => step.value
    
    CTHK.go = function go (gn) {


        
    }
    
    CTHK.async = function async (fn, ms) {
        


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