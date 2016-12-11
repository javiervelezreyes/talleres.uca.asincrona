module.exports = (function (global) {
       
    let CPS  = {}
    let NULL = void 0
    
    CPS.async = function async (fn, ms) {
        


    }
    
    CPS.Log = function Log (ref) {
        
        return function (error, data) {
            if (error) console.log ('Test #%s [error] - %s', ref, error)
            if (data)  console.log ('Test #%s [ok]    - %s', ref, data)
        }
        
    }
    
    return CPS

})(global || window)