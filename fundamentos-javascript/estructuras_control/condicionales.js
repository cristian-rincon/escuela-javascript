var cristian = {
    nombre : 'Cristian',
    apellido : 'RIncon',
    edad: 23,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: true,
    drone: false

}

var stitch = {
    nombre: 'Stitch',
    apellido: '',
    edad: 1,
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`);
    if (persona.ingeniero) {
        console.log('Ingeniero');
        
    } else {
        console.log('No es ingeniero');
        
    }
    
}

imprimirProfesiones(cristian);

const MAYORIA_DE_EDAD = 18;

// const esMayordeEdad = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }

// const esMayordeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

const esMayordeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;




function imprimirSiEsMayorDeEdad(persona) {
    if (esMayordeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} no es mayor de edad`);
    }

}


imprimirSiEsMayorDeEdad(cristian);
imprimirSiEsMayorDeEdad(stitch);

function permitirAcceso(persona) {
    if (!esMayordeEdad(persona)) {
        console.log('Acceso denegado');
        
    } else {
        
    }
}

permitirAcceso(stitch);