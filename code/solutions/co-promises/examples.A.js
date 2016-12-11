let CPRM = require ('./co-prm')
let Test = require ('../../test/test')(CPRM.Log)

let add   = function (x, y) { return x + y }
let sub   = function (x, y) { return x - y }
let mul   = function (x, y) { return x * y }
let div   = function (x, y) { return x / y }
let error = function ()     { throw Error ('Fatal') }
    
let aAdd   = CPRM.async (add)
let aSub   = CPRM.async (sub)
let aMul   = CPRM.async (mul)
let aDiv   = CPRM.async (div)
let aError = CPRM.async (error)


// CPRM.A1 Realizar la operación 2 + 3 de forma 
// asincrona y mostrar el resultado por 
// pantalla.

Test.define (function (Log) {
   
    CPRM.go (function* () {

        let x = yield aAdd (2, 3)
        Log.log (x)
        
    })
    
})


// CPRM.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.define (function (Log) {
    
    CPRM.go (function* () {

        let x = yield aAdd (2, 3)
        let y = yield aMul (x, 5)
        Log.log (y)
        
    })

})


// CPRM.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    
    CPRM.go (function* () {

        let x = yield aAdd (2, 3)
        let y = yield aMul (x, 5)
        let z = yield aSub (y, 4)
        Log.log (z)
        
    })

})


// CPRM.A4 Realizar la operación (2 + 3) * (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    
    CPRM.go (function* () {

        let [x, y] = yield [aAdd (2, 3), aAdd (5, 4)]
        let z = x * y
        Log.log (z)
        
    })

})


// CPRM.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    
    CPRM.go (function* () {
    
        let [x, y] = yield [aAdd (2, 3), aAdd (5, 4)]
        let z = yield aMul (x, 5)
        let w = yield aDiv (z, y)
        Log.log (z)
        
    })

})


// CPRM.A6 Error 

Test.define (function (Log) {

    CPRM.go (function* () {
    
        try {
            yield aError ()
        } catch (e) {
            Log.log (e)
        }
        
    })

})

Test.doAll ()