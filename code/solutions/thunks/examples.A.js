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
   
    aAdd (2, 3)(log)

})


// THK.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.skip (function (log) {

    aAdd (2, 3)(function (error, data) {
        if (data) aMul (data, 5)(log)
    })

})

Test.define (function (log) {

    THK.serie (
        aAdd (2, 3),
        aMul (5)
    )(log)

})


// THK.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.skip (function (log) {

    aAdd (2, 3)(function (error, data) {
        if (data) aMul (data, 5)(function (error, data) {
            if (data) aSub (data, 4)(log)
        })
    })

})

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

Test.skip (function (log) {

    aAdd (2, 3)(function (e, s1) {
        aAdd (5, 4)(function (e, s2) {
            aMul (s1, s2)(log)
        })
    })

})

Test.skip (function (log) {

    let s1, s2
    
    aAdd (2, 3)(function (e, s) {
        if (s2) aMul (s, s2)(log)
        else s1 = s 
    })
    aAdd (5, 4)(function (e, s) {
        if (s1) aMul (s1, s)(log)
        else s2 = s 
    })

})

Test.define (function (log) {

    THK.all (
        aAdd (2, 3),
        aAdd (5, 4)
    )(function (e, xs) {
        aMul (xs[0], xs[1])(log)
    })

})


// THK.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.skip (function (log) {

    let s1, s2
    
    aAdd (2, 3)(function (e, s) {
        aMul (s, 5)(function (e, s) {
            if (s2) aDiv (s, s2)(log)
            else s1 = s 
        })
    })
    aAdd (5, 4)(function (e, s) {
        if (s1) aDiv (s1, s)(log)
        else s2 = s 
    })

})

Test.define (function (log) {

    THK.all (
        THK.serie (
            aAdd (2, 3),
            aMul (5)
        ),
        aAdd (5, 4)
    )(function (e, xs) {
        aDiv (xs[0], xs[1])(log)
    })

})


// THK.A6 Error 

Test.define (function (log) {

    aError (log)

})

Test.doAll ()