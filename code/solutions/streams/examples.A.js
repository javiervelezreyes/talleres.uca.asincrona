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
       
    let s1 = new STRM.Stream ()
        .take (2)
        .reduce (aAdd, 0)
        .end (log)
    
    s1 (2, 3)

})


// STRM.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.define (function (log) {
    
    let s1 = new STRM.Stream ()
        .take (2)
        .reduce (aAdd, 0)
        .map (aMul(5))
        .end (log)
    
    s1 (2, 3)
    
})


// STRM.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (log) {

    let s1 = new STRM.Stream ()
        .take (2)
        .reduce (aAdd, 0)
        .map (aMul(5))
        .map (aSub(4))
        .end (log)
    
    s1 (2, 3)

})


// STRM.A4 Realizar la operación (2 + 3) * (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.


Test.define (function (log) {

    let s = new STRM.Stream ()
        .take (2)
        .reduce (aMul, 1)
        .end (log)
    
    let s1 = new STRM.Stream ()
        .take (2)
        .reduce (aAdd, 0)
        .end (s)
    let s2 = new STRM.Stream ()
        .take (2)
        .reduce (aAdd, 0)
        .end (s)

    
    s1 (2, 3)
    s2 (5, 4)

})


// STRM.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (log) {

    let s = new STRM.Stream ()
        .take (2)
        .map (aRev)
        .reduce (aDiv, 1)
        .end (log)
    
    let s1 = new STRM.Stream ()
        .take (2)
        .reduce (aAdd, 0)
        .map (aMul(5))
        .end (s)
    let s2 = new STRM.Stream ()
        .take (2)
        .reduce (aAdd, 0)
        .end (s)
    
    s1 (2, 3)
    s2 (5, 4)
    
})


Test.doAll ()