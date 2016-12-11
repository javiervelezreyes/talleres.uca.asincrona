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
    

    }
    
    PRM.Promise = class Promise {
        
        constructor (fn) {
     
            this.id = Id++
            this.s  = PENDING
            this.defer (fn)
            
        }
        
        defer (fn) {
            

            
        }
        
        then (hn) {
            

            
        }
        
        catch (hn) {


        
        }
        
        static resolve (value) {
        

            
        }
        
        static reject (error) {
            

        
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