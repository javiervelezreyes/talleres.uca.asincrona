let CTHK  = require ('./co-thk')
let Test = require ('../../test/test')(CTHK.Log)

let add   = function (x, y) { return x + y }
let sub   = function (x, y) { return x - y }
let mul   = function (x, y) { return x * y }
let div   = function (x, y) { return x / y }
let error = function ()     { throw Error ('Fatal') }
    
let aAdd   = CTHK.async (add)
let aSub   = CTHK.async (sub)
let aMul   = CTHK.async (mul)
let aDiv   = CTHK.async (div)
let aError = CTHK.async (error)


// CTHK.A1 Realizar la operación 2 + 3 de forma 
// asincrona y mostrar el resultado por 
// pantalla.

Test.define (function (Log) {
   
    CTHK.go (function* () {


        
    })
    
})


// CTHK.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.define (function (Log) {
    
    CTHK.go (function* () {


        
    })

})


// CTHK.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    
    CTHK.go (function* () {


        
    })

})


// CTHK.A4 Realizar la operación (2 + 3) * (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    
    CTHK.go (function* () {


        
    })

})


// CTHK.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    
    CTHK.go (function* () {
    

        
    })

})


// CTHK.A6 Error 

Test.define (function (Log) {

    CTHK.go (function* () {
    
        try {
            yield aError ()
        } catch (e) {
            Log.log (e)
        }
        
    })

})

Test.doAll ()