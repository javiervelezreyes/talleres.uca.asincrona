module.exports = (function (global) {
       
    let CPS  = {}
    let NULL = void 0
    
    CPS.async = function async (fn, ms) {
        
        return function (...args) {
            global.setTimeout (function () {
                let hn = args.pop ()
                try {
                    let r = fn.apply (NULL, args)
                    hn (NULL, r)
                } catch (e) {
                    hn (e.message)
                }
            }, ms || 100)
        }

    }
    
    CPS.Log = function Log (ref) {
        
        return function (error, data) {
            if (error) console.log ('Test #%s [error] - %s', ref, error)
            if (data)  console.log ('Test #%s [ok]    - %s', ref, data)
        }
        
    }
    
    return CPS

})(global || window)