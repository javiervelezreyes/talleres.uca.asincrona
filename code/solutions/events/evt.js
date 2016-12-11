module.exports = (function (global) {
       
    let EVT  = {}
    let NULL = void 0
    
    let ERROR = 'ERROR'
    
    EVT.type = (type) => EVT[type.toUpperCase ()] = type.toUpperCase ()
    
    EVT.lCurry = function lCurry (fn, n) {

        let l = n || fn.length
        return (function aux (args) {
            return args.length >= l ?
                fn.apply(this, args) :
                function (...rest) {
                    return aux([...args, ...rest])
                }
        })([]) 
        
    }
    
    EVT.rCurry = function rCurry (fn, n) {

        let l = n || fn.length
        return (function aux (args) {
            return args.length >= l ?
                fn.apply(this, args) :
                function (...rest) {
                    return aux([...rest, ...args])
                }
        })([]) 
        
    }
    
    EVT.Bus = (function () {
    
        let reg = {}
        let bus = {
            send : function send (event) {
                (reg[event.type] || [])
                    .forEach (function (fn) {
                        fn.call (NULL, event.context)
                    })
            },

            receive : function receive (type, fn) {
                reg[type] = (reg[type] || [])
                    .concat (fn)
            }
        }
        
        Object.keys (EVT.ops)
            .forEach (function (key) {
                EVT.ops[key](bus)
            })
        return bus
        
    })
    
    EVT.async = function async (fn, type, ms) {
        
        let eType = EVT.type (type || fn.name)
        let error = EVT.type (ERROR)

        EVT.ops       = EVT.ops || {}
        EVT.ops[eType] = function (bus) {

            bus[type || fn.name] = EVT.rCurry (function (...args) {
                global.setTimeout (function () {
                    try { 
                        bus.send ({
                            type    : eType,
                            context : fn.apply (NULL, args)
                        })
                    } catch (e) {
                        bus.send ({
                            type    : error,
                            context : e.message
                        })
                    }
                }, ms || 100)
            }, fn.length)
        
        }
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