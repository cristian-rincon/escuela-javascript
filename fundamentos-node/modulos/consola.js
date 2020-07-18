const tabla = [
    {
        a: 1,
        b: 'C'
    },
    {
        a: 2,
        b: 'D'
    }
]


console.group('Saludos')
console.log('Hola, soy un log')
console.log('Hola, soy un log')
console.log('Hola, soy un log')
console.groupEnd()
console.info('Hola, soy un info')
console.error('Hey!, soy un error')
console.warn('Precaución amiguillo')
console.table(tabla)
console.timeEnd()
