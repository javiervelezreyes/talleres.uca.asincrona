let THK  = require ('./thk')
let Test = require ('../../test/test')(THK.Log)

let add   = function (x, y) { return x + y }
let sub   = function (x, y) { return x - y }
let mul   = function (x, y) { return x * y }
let div   = function (x, y) { return x / y }
let error = function ()     { throw Error ('Fatal') }
    
let aAdd   = THK.async (add)
let aSub   = THK.async (sub)
let aMul   = THK.async (mul)
let aDiv   = THK.async (div)
let aError = THK.async (error)


// THK.A1 Realizar la operación 2 + 3 de forma 
// asincrona y mostrar el resultado por 
// pantalla.

Test.define (function (log) {
   


})


// THK.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.define (function (log) {



})


// THK.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (log) {

    THK.serie (
        aAdd (2, 3),
        aMul (5),
        aSub (4)
    )(log)

})


// THK.A4 Realizar la operación (2 + 3) * (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (log) {



})


// THK.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (log) {



})


// THK.A6 Error 

Test.define (function (log) {

    aError (log)

})

Test.doAll ()