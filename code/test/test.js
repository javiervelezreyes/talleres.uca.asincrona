module.exports = (function (Log) {
       
    var Test = {};
    var fns  = [];
       
    Test.define = function (fn) { 
        
        fns.push (fn);
        
    };
    
    Test.skip = function (fn) {
        
    };
    
    Test.doAll = function (gns) {
        
        var gns = gns || fns;
        gns.forEach (function (gn, idx) {
            gn(Log (idx + 1));
        });
        
    };
    
    Test.doOne = function (n, gns) {
        
        var gns = gns || fns;
        Test.doAll (
            gns.filter (function (fn, idx) {
                return idx + 1 === n;
            })
        );
            
    };
    
    Test.doFrom = function (n, gns) {
        
        var gns = gns || fns;
        Test.doAll (
            gns.filter (function (fn, idx) {
                return idx >= n;
            })
        );
            
    };
    
    Test.doUp = function (n, gns) {
        
        var gns = gns || fns;
        Test.doAll (
            gns.filter (function (fn, idx) {
                return idx < n;
            })
        );
            
    };
    

    return Test;
    
});