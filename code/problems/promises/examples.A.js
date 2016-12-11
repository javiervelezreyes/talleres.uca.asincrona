let PRM  = require ('./prm')
let Test = require ('../../test/test')(PRM.Log)

let add   = function (x, y) { return x + y }
let sub   = function (x, y) { return x - y }
let mul   = function (x, y) { return x * y }
let div   = function (x, y) { return x / y }
let error = function ()     { throw Error ('Fatal') }
    
let aAdd   = PRM.async (add)
let aSub   = PRM.async (sub)
let aMul   = PRM.async (mul)
let aDiv   = PRM.async (div)
let aError = PRM.async (error)


// PRM.A1 Realizar la operación 2 + 3 de forma 
// asincrona y mostrar el resultado por 
// pantalla.

Test.define (function (Log) {
    


})


// PRM.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.define (function (Log) {



})


// PRM.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {



})


// PRM.A4 Realizar la operación (2 + 3) * (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    


})


// PRM.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {



})


// PRM.A6 Error 

Test.define (function (Log) {

    aError ()
        .catch (Log.error)

})

Test.doAll ()