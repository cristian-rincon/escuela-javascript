let nombre = process.env.NOMBRE || 'Sin nombre'
let web = process.env.WEB || 'notengo.web'


if (process.env.NOMBRE == null) {
    console.log('No has seteado un nombre');
} else {
    console.log(`Hola, ${nombre}`);
}

if (process.env.WEB == null) {
    console.log('No hay websites seteados');
} else {
    console.log(`Mi página es: ${web}`);
}

// NOMBRE=Cristian WEB=crincon.herokuapp.com node conceptos/entorno.js
// Nombres de variables de entorno en mayúsculas por convención