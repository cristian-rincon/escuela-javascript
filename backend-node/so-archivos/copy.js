const fs = require("fs");


fs.copyFile('naranja.txt', 'platzi/naranja.txt', err => {
    if (err) {
        console.error(err);
    }

    console.log('Archivo copiado de forma exitosa.');
})