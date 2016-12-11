let CHNL = require ('./co-chn')
let Test = require ('../../test/test')(CHNL.Log)

let add   = function (x, y) { return x + y }
let sub   = function (x, y) { return x - y }
let mul   = function (x, y) { return x * y }
let div   = function (x, y) { return x / y }
    
let aAdd   = CHNL.async (add)
let aSub   = CHNL.async (sub)
let aMul   = CHNL.async (mul)
let aDiv   = CHNL.async (div)



// CHNL.A1 Realizar la operación 2 + 3 de forma 
// asincrona y mostrar el resultado por 
// pantalla.

Test.define (function (Log) {
   
    CHNL.go (function* () {


        
    })
    
})


// CHNL.A2 Realizar la operación (2 + 3) * 5 de 
// forma asincrona y mostrar el resultado
// por pantalla.

Test.define (function (Log) {
    
    CHNL.go (function* () {


        
    })

})


// CHNL.A3 Realizar la operación (2 + 3) * 5 - 4
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    
    CHNL.go (function* () {


        
    })

})


// CHNL.A4 Realizar la operación (2 + 3) * (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    
    CHNL.go (function* () {


        
    })

})


// CHNL.A5 Realizar la operación (2 + 3) * 5 / (5 + 4)
// de forma asincrona y mostrar el resultado 
// por pantalla.

Test.define (function (Log) {
    
    CHNL.go (function* () {
    

        
    })

})


Test.doAll ()