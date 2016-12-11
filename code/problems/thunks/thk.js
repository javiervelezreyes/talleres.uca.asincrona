module.exports = (function (global) {
       
    let THK  = {}
    let NULL = void 0
    
    THK.lCurry = function lCurry (fn, n) {


        
    }
    
    THK.rCurry = function rCurry (fn, n) {


        
    }
        
    THK.async = function async (fn, ms) {
        


    }
        
    THK.serie = function serie (...gns) {
        
        
        
    }
    
    THK.all = function all (...gns) {


      
    }
    
    THK.Log = function Log (ref) {
        
        return function (error, data) {
            if (error) console.log ('Test #%s [error] - %s', ref, error)
            if (data)  console.log ('Test #%s [ok]    - %s', ref, data)
        }
        
    }
    
    
    return THK

})(global || window)