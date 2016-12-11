let EVT  = require ('./evt')
let Test = require ('../../test/test')(EVT.Log)

let add   = function (x, y) { return x + y }
let sub   = function (x, y) { return x - y }
let mul   = function (x, y) { return x * y }
let div   = function (x, y) { return x / y }
let error = function (x)    { throw Error (x) }

let NULL  = void 0
    
EVT.async (add)
EVT.async (sub)
EVT.async (mul)
EVT.async (div)
EVT.async (error)


// EVT.A1 Realizar la operación 2 + 3 de forma 
// asincrona y mostrar el resultado por 
// pantalla.

Test.define (function (Log) {
       


})


// EVT.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.define (function (Log) {


    
})


// EVT.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {



})


// EVT.A4 Realizar la operación (2 + 3) * (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {



})


// EVT.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {



})


// EVT.A6 Error 

Test.define (function (Log) {

    let bus = EVT.Bus ()

    bus.receive (EVT.ERROR, Log.error)
    
    bus.error ('Fatal')

})


Test.doAll ()