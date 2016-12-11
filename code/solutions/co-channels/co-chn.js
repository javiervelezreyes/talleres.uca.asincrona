module.exports = (function (global) {
       
    let CHNL = {}
    let NULL = void 0

    let isCh   = (thk) => thk.value instanceof Channel
    let getCh  = (thk) => thk.value
    let isIt   = (thk) => thk.value instanceof Array
    let getChs = (thk) => thk.value

    function process (ch, code) {
        while (ch.readers.length > 0 &&
               ch.writers.length  > 0) {
            
            let aReader = ch.readers.shift()(code)
            let aWriter = ch.writers.shift()
            return aWriter (aReader)
        }
    }
    
    CHNL.Channel = class Clannel {
    
        constructor () {
            this.writers = []
            this.readers = []
        }
        
        take () {
            this.readers.push (function (code) {
                return function (v) {
                    return code.next (v)
                }
            })
            return this
        }
        
        put (v) {
            this.writers.push (function (reader) {
                return reader (v)
            })
            return this
        }
    
    }
        
    CHNL.go = function go (gn) {
                
        let code = gn ();
        (function resolve (step) {

            if (step.done) return step.value
            else {
                let ch   = step.value
                let next = process (ch, code)
                if (next) resolve (next)
                else global.setTimeout (function () { resolve (step) }, 0)
            }
            
        })(code.next ())
                
    }
        
    CHNL.async = function async (fn, ms) {
        
        return function (...args) {
            let ch = new CHNL.Channel ()
            global.setTimeout (function () {
                try {
                    let r = fn.apply (NULL, args)
                    ch.put (r)
                } catch (e) {}
            }, ms || 100)
            return ch
        }
    
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