// FLAT - APLANAR

let arreglo = [1,2,3,4,5, [1,2,3, [3,4,5]]]

console.log(arreglo.flat(3));

let arreglo1 = [1,2,3,4,5,6]

console.log(arreglo1.flatMap(value => [value, value * 2 ]));

// TRIM - CORTAR ESPACIOS

let holi = '                Holi'

console.log(holi);
console.log(holi.trimStart());



//OPTIONAL CATCH BINDING


// 


let entries = [['name','cristian'],[ 'age', 32]]

console.log(Object.fromEntries(entries));


let misimbolo = `My Symbol`

let symbol = Symbol(misimbolo)

console.log(symbol.description);
