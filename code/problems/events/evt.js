module.exports = (function (global) {
       
    let EVT  = {}
    let NULL = void 0
    
    let ERROR = 'ERROR'
    
    EVT.type = (type) => EVT[type.toUpperCase ()] = type.toUpperCase ()
    
    EVT.lCurry = function lCurry (fn, n) {


        
    }
    
    EVT.rCurry = function rCurry (fn, n) {


        
    }
    
    EVT.Bus = (function () {
    

        
    })
    
    EVT.async = function async (fn, type, ms) {
        

    }
    
    EVT.Log = function Log (ref) {
        
        return {
            log : function log (ctx) {
                console.log ('Test #%s [ok]    - %s', ref, ctx)
            },
            error : function error (ctx) {
                console.log ('Test #%s [error] - %s', ref, ctx)
            }
        }
        
    }
    
    
    return EVT

})(global || window)