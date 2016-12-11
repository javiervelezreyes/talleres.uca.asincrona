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
       
    let bus = EVT.Bus ()

    bus.receive (EVT.ADD, Log.log)
    bus.receive (EVT.ERROR, Log.error)
    
    bus.add (2, 3)

})


// EVT.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.define (function (Log) {

    let bus = EVT.Bus ()

    bus.receive (EVT.ADD, bus.mul(5))
    bus.receive (EVT.MUL, Log.log)
    bus.receive (EVT.ERROR, Log.error)

    bus.add (2, 3)
    
})


// EVT.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {

    let bus = EVT.Bus ()
    
    bus.receive (EVT.ADD, bus.mul (5))
    bus.receive (EVT.MUL, bus.sub (4))
    bus.receive (EVT.SUB, Log.log)
    bus.receive (EVT.ERROR, Log.error)
    
    bus.add (2, 3)

})


// EVT.A4 Realizar la operación (2 + 3) * (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.


Test.skip (function (Log) {

    EVT.async (function (x) {
        return function merge (y) {
            if (x === NULL) x = y
            else bus.mul (x, y)
        }
    }())
    
    let bus = EVT.Bus ()
    
    bus.receive (EVT.ADD, bus.merge)
    bus.receive (EVT.MUL, Log.log)
    bus.receive (EVT.ERROR, Log.error)

    bus.add (2, 3)
    bus.add (5, 4)

})

Test.define (function (Log) {

    EVT.async (add, 'ADD1')
    EVT.async (add, 'ADD2')
    EVT.async (function () {
        let x, y
        return function merge (v) {
                 if (x === NULL) x = v
            else if (y === NULL) y = v
            if (x !== NULL && y !== NULL) {
                bus.mul (x, y)
                x = y = NULL
            }
        }
    }())
    
    let bus = EVT.Bus ()
    
    bus.receive (EVT.ADD1, bus.merge)
    bus.receive (EVT.ADD2, bus.merge)
    bus.receive (EVT.MUL, Log.log)
    bus.receive (EVT.ERROR, Log.error)

    bus.ADD1 (2, 3)
    bus.ADD2 (5, 4)

})


// EVT.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {

    EVT.async (add, 'ADD1')
    EVT.async (add, 'ADD2')
    EVT.async (function () {
        let x, y
        return function merge (v) {
                 if (y === NULL) y = v
            else if (x === NULL) x = v
            if (x !== NULL && y !== NULL) {
                bus.div (x, y)
            }
        }
    }())
    
    let bus = EVT.Bus ()
    
    bus.receive (EVT.ADD1, bus.mul (5))
    bus.receive (EVT.ADD2, bus.merge)
    bus.receive (EVT.MUL, bus.merge)
    bus.receive (EVT.DIV, Log.log)
    bus.receive (EVT.ERROR, Log.error)

    bus.ADD1 (2, 3)
    bus.ADD2 (5, 4)

})


// EVT.A6 Error 

Test.define (function (Log) {

    let bus = EVT.Bus ()

    bus.receive (EVT.ERROR, Log.error)
    
    bus.error ('Fatal')

})


Test.doAll ()