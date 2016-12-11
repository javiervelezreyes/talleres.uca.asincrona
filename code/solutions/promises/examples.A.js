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
    
    aAdd (2, 3)
        .then  (Log.log)
        .catch (Log.error)

})


// PRM.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.define (function (Log) {

    aAdd (2, 3)
        .then (function (v) {
            return aMul (v, 5)
        })
        .then (Log.log)
        .catch (Log.error)

})


// PRM.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {

    aAdd (2, 3)
        .then (function (v) {
            return aMul (v, 5)
        })
        .then (function (v) {
            return aSub (v, 4)
        })
        .then (Log.log)
        .catch (Log.error)

})


// PRM.A4 Realizar la operación (2 + 3) * (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    
    PRM.Promise.all ([
        aAdd (2, 3),
        aAdd (5, 4)
    ])
    .then (function (vs) {
        return aMul (vs[0], vs[1])
    })
    .then (Log.log)
    .catch (Log.error)

})


// PRM.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {

    PRM.Promise.all ([
        aAdd (2, 3)
        .then (function (v) {
            return aMul (v, 5)
        }),
        aAdd (5, 4)
    ])
    .then (function (vs) {
        return aDiv (vs[0], vs[1])
    })
    .then (Log.log)
    .catch (Log.error)

})


// PRM.A6 Error 

Test.define (function (Log) {

    aError ()
        .catch (Log.error)

})

Test.doAll ()