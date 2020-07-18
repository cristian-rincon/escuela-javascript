var Daniel = {
    nombre: `Daniel`,
    apellido: `Dominguez`,
    altura: 1.82
}

var Paula = {
    nombre: `Paula`,
    apellido: `Torres`,
    altura: 1.70
}

var Juan = {
    nombre: `Juan`,
    apellido: `Lopez`,
    altura: 2.00
}

var Arturo = {
    nombre: `Arturo`,
    apellido: `Tello`,
    altura: 1.75
}

var Diana = {
    nombre: `Diana`,
    apellido: `Medina`,
    altura: 1.60
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
