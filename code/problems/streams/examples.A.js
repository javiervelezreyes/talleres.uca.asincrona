let STRM  = require ('./strm')
let Test = require ('../../test/test')(STRM.Log)

let add = function (x, y) { return x + y }
let sub = function (x, y) { return x - y }
let mul = function (x, y) { return x * y }
let div = function (x, y) { return x / y }
let rev = function (xs)   { return xs.reverse () }
    
let aAdd = STRM.async (add)
let aSub = STRM.async (sub)
let aMul = STRM.async (mul)
let aDiv = STRM.async (div)
let aRev = STRM.async (rev) 


// STRM.A1 Realizar la operación 2 + 3 de forma 
// asincrona y mostrar el resultado por 
// pantalla.

Test.define (function (log) {
       


})


// STRM.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.define (function (log) {
    

    
})


// STRM.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (log) {



})


// STRM.A4 Realizar la operación (2 + 3) * (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.


Test.define (function (log) {



})


// STRM.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (log) {


    
})


Test.doAll ()