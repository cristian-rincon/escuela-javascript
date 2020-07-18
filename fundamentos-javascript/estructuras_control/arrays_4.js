var Daniel = {
    nombre: `Daniel`,
    apellido: `Dominguez`,
    altura: 1.82,
    cantidadDeLibros: 5
}

var Paula = {
    nombre: `Paula`,
    apellido: `Torres`,
    altura: 1.70,
    cantidadDeLibros: 10,
}

var Juan = {
    nombre: `Juan`,
    apellido: `Lopez`,
    altura: 2.00,
    cantidadDeLibros: 50,
}

var Arturo = {
    nombre: `Arturo`,
    apellido: `Tello`,
    altura: 1.75,
    cantidadDeLibros: 200,
}

var Diana = {
    nombre: `Diana`,
    apellido: `Medina`,
    altura: 1.60,
    cantidadDeLibros: 90,
}

const esAlta = persona => persona.altura > 1.8
const esBaja = persona => persona.altura < 1.8

var personas = [Daniel, Paula, Juan, Arturo, Diana]

var personasAltas = personas.filter(esAlta)

var personasBajas = personas.filter(esBaja)

const pasarAlturaACms = persona => ({
        ...persona,
        altura: persona.altura *100
    })


var personasCms = personas.map(pasarAlturaACms)


console.log(personasCms);
console.log(personasBajas);

const reducer = (acum,{ cantidadDeLibros }) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros.`);
