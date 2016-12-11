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
   
    aAdd (2, 3, log)

})


// CPS.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.define (function (log) {

    aAdd (2, 3, function (error, data) {
        if (data) aMul (data, 5, log)
    })

})


// CPS.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (log) {

    aAdd (2, 3, function (error, data) {
        if (data) aMul (data, 5, function (error, data) {
            if (data) aSub (data, 4, log)
        })
    })

})


// CPS.A4 Realizar la operación (2 + 3) * (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.skip (function (log) {

    aAdd (2, 3, function (e, s1) {
        aAdd (5, 4, function (e, s2) {
            aMul (s1, s2, log)
        })
    })

})

Test.define (function (log) {

    let s1, s2
    
    aAdd (2, 3, function (e, s) {
        if (s2) aMul (s, s2, log)
        else s1 = s 
    })
    aAdd (5, 4, function (e, s) {
        if (s1) aMul (s1, s, log)
        else s2 = s 
    })

})


// CPS.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (log) {

    let s1, s2
    
    aAdd (2, 3, function (e, s) {
        aMul (s, 5, function (e, s) {
            if (s2) aDiv (s, s2, log)
            else s1 = s 
        })
    })
    aAdd (5, 4, function (e, s) {
        if (s1) aDiv (s1, s, log)
        else s2 = s 
    })

})


// CPS.A6 Error 

Test.define (function (log) {

    aError (log)

})


Test.doAll ()