let CPS  = require ('./cps')
let Test = require ('../../test/test')(CPS.Log)

let add   = function (x, y) { return x + y }
let sub   = function (x, y) { return x - y }
let mul   = function (x, y) { return x * y }
let div   = function (x, y) { return x / y }
let error = function ()     { throw Error ('Fatal') }
    
let aAdd   = CPS.async (add)
let aSub   = CPS.async (sub)
let aMul   = CPS.async (mul)
let aDiv   = CPS.async (div)
let aError = CPS.async (error)


// CPS.A1 Realizar la operación 2 + 3 de forma 
// asincrona y mostrar el resultado por 
// pantalla.

Test.define (function (log) {

    
    
})


// CPS.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.define (function (log) {

    
    
})


// CPS.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (log) {



})


// CPS.A4 Realizar la operación (2 + 3) * (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (log) {



})


// CPS.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (log) {



})


// CPS.A6 Error 

Test.define (function (log) {

    aError (log)

})


Test.doAll ()