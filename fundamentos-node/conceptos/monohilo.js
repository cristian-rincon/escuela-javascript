console.log('Hola, mundo')

let i = 0

setInterval(function () {
    console.log(i);
    i++
    // console.log('Hola, sigo aquí ...')
}, 1000)

console.log('Hola, segunda instrucción...')

// Si se para el monohilo se detienen todos los threads, procesos, todo se detiene.