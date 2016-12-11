module.exports = (function (global) {
       
    let STRM  = {}
    let NULL  = void 0
    let FNULL = () => {}
    
    let isStrm = (s) => s instanceof STRM.Stream

    STRM.Stream = class Stream {
    
        constructor () {
            this.fns = []
        }        
        
        reduce (fn, b) {

            return this
        }
        
        map (fn) {

            return this
        }

        take (n) {

            return this
        }

        skip (n) {

            return this
        }
            
        end (tn) {
            let gn = tn ?
                isStrm (tn) ?
                    function (v) { tn.next (v) } :
                    tn :
                FNULL
             
            this.next = this.fns
                .reverse ()
                .reduce (function (cb, fn) {
                    return fn (cb)
                }, gn)
            
            return function (...args) {
                args.forEach (function (x) {
                    this.next (x)
                }, this)
            }.bind (this)
        }
    
    }

    STRM.lCurry = function lCurry (fn, n) {

        let l = n || fn.length
        return (function aux (args) {
            return args.length >= l ?
                fn.apply(this, args) :
                function (...rest) {
                    return aux([...args, ...rest])
                }
        })([]) 
        
    }
    
    STRM.rCurry = function rCurry (fn, n) {

        let l = n || fn.length
        return (function aux (args) {
            return args.length >= l ?
                fn.apply(this, args) :
                function (...rest) {
                    return aux([...rest, ...args])
                }
        })([]) 
        
    }
    
    STRM.async = function async (fn, ms) {
        

    
    }
    
  
    STRM.Log = function Log (ref) {
        
        return function log (...args) {
            console.log ('Test #%s [ok] - %s', ref, ...args)
        }
        
    }
    
    
    return STRM

})(global || window)