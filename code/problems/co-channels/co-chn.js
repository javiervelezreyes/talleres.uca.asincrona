module.exports = (function (global) {
       
    let CHNL = {}
    let NULL = void 0

    let isCh   = (thk) => thk.value instanceof Channel
    let getCh  = (thk) => thk.value
    let isIt   = (thk) => thk.value instanceof Array
    let getChs = (thk) => thk.value

    function process (ch, code) {

    }
    
    CHNL.Channel = class Clannel {
    
        constructor () {
            this.writers = []
            this.readers = []
        }
        
        take () {

            return this
        }
        
        put (v) {

            return this
        }
    
    }
        
    CHNL.go = function go (gn) {
                

                
    }
        
    CHNL.async = function async (fn, ms) {
        

    
    }
    
    CHNL.Log = function Log (ref) {
        
        return {
            log : function (...data) {
                console.log ('Test #%s [ok]    - %s', ref, data)
            },
            error : function (...error) {
                if (error) console.log ('Test #%s [error] - %s', ref, error)
            }
        }
        
    }
        
    
    
    return CHNL

})(global || window)