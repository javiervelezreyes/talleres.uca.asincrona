module.exports = (function (global) {
       
    let PRM  = {}
    let NULL = void 0
    let Id   = 0
    
    let PENDING   = 0
    let FULFILLED = 1
    let REJECTED  = 2
    let SETTLED   = 3
    let RESOLVED  = 4
    

    function process (p) {
    
        p.next.defer (function (resolve, reject) {

            if (p.s === FULFILLED) {
                try {
                    let r = p.hn (p.v)
                    if (r && r.then) {
                        r.then (function (v) {
                            resolve (v)
                        })
                    } else resolve (r)
                }
                catch (e) { reject (e) }
                this.s = RESOLVED
            }

            else if (p.s === REJECTED) {
                try {
                    let r = p.hn (p.e)
                    if (r && r.then) {
                        r.then (function (e) {
                            resolve (e)
                        })
                    } else resolve (r)
                }
                catch (e) { reject (e) }
                this.s = RESOLVED
            }
            
        });
    }
    
    PRM.Promise = class Promise {
        
        constructor (fn) {
     
            this.id = Id++
            this.s  = PENDING
            this.defer (fn)
            
        }
        
        defer (fn) {
            
            if (fn) {
                fn (
                    function (v) { 
                        this.v = v
                        if (this.s === SETTLED) {
                            this.s = FULFILLED
                            process (this)
                        }
                        else this.s = FULFILLED
                    }.bind (this),

                    function (e) { 
                        this.e = e
                        if (this.s === SETTLED) {
                            this.s = REJECTED
                            process (this)
                        }
                        else this.s = REJECTED
                    }.bind (this)
                )
            }
            
        }
        
        then (hn) {
            
            this.hn   = hn 
            this.next = new PRM.Promise ()

            if (this.s === FULFILLED ||
                this.s === REJECTED) process (this)
            else this.s = SETTLED 
            return this.next
            
        }
        
        catch (hn) {

            return this.then (hn)
        
        }
        
        static resolve (value) {
        
            return new PRM.Promise (function (resolve, reject) {
                resolve (value)
            })
            
        }
        
        static reject (error) {
            
            return new PRM.Promise (function (resolve, reject) {
                reject (error)
            })
        
        }
        
        static all (ps) {
            
            let n  = 0
            let vs = []
            let es = []
            let q  = new PRM.Promise ()
            let hn = function (idx) {
                return {
                    then : function (v) {
                        vs[idx] = v
                        n++
                        if (n === ps.length) {
                            q.defer (function (resolve, reject) {
                                resolve (vs)
                            })
                        }
                    },
                    fail : function (e) {
                        if (e) {
                            es[idx] = e
                            n++
                            if (n === ps.length) {
                                q.defer (function (resolve, reject) {
                                    reject (es)
                                })
                            }
                        }
                    }
                }
            }
            
            ps.forEach (function (p, idx) {
                p.then  (hn (idx).then)
                 .catch (hn (idx).fail);
            })
            
            return q
     
        }
    
    }
            
    PRM.async = function async (fn, ms) {

        return function (...args) {
            return new PRM.Promise (function (resolve, reject) {
                global.setTimeout (function () {
                    try {
                        let r = fn.apply (NULL, args)
                        resolve (r)
                    } catch (e) {
                        reject (e)
                    }
                }, ms || 100)
            })
        }

    }
    
    PRM.Log = function Log (ref) {
        
        return {
            log : function (data) {
                console.log ('Test #%s [ok]    - %s', ref, data)
            },
            error : function (error) {
                if (error) console.log ('Test #%s [error] - %s', ref, error)
            }
        }
        
    }
    
    
    return PRM

})(global || window)