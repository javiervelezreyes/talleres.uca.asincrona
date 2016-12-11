let CHNL = require ('./co-chn')
let Test = require ('../../test/test')(CHNL.Log)

let add   = function (x, y) { return x + y }
let sub   = function (x, y) { return x - y }
let mul   = function (x, y) { return x * y }
let div   = function (x, y) { return x / y }
    
let aAdd   = CHNL.async (add)
let aSub   = CHNL.async (sub)
let aMul   = CHNL.async (mul)
let aDiv   = CHNL.async (div)



// CHNL.A1 Realizar la operación 2 + 3 de forma 
// asincrona y mostrar el resultado por 
// pantalla.

Test.define (function (Log) {
   
    CHNL.go (function* () {

        let x = yield aAdd (2, 3).take ()
        Log.log (x)
        
    })
    
})


// CHNL.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.define (function (Log) {
    
    CHNL.go (function* () {

        let x = yield aAdd (2, 3).take ()
        let y = yield aMul (x, 5).take ()
        Log.log (y)
        
    })

})


// CHNL.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    
    CHNL.go (function* () {

        let x = yield aAdd (2, 3).take ()
        let y = yield aMul (x, 5).take ()
        let z = yield aSub (y, 4).take ()
        Log.log (z)
        
    })

})


// CHNL.A4 Realizar la operación (2 + 3) * (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    
    CHNL.go (function* () {

        let x = yield aAdd (2, 3).take ()
        let y = yield aAdd (5, 4).take ()
        let z = x * y
        Log.log (z)
        
    })

})


// CHNL.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    
    CHNL.go (function* () {
    
        let x = yield aAdd (2, 3).take ()
        let y = yield aAdd (5, 4).take ()
        let z = yield aMul (x, 5).take ()
        let w = yield aDiv (z, y).take ()
        Log.log (w)
        
    })

})


Test.doAll ()