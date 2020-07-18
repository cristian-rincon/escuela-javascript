const fs = require('fs')

function leer(ruta, miCallback) {
    fs.readFile(ruta, (err, data) => {
        miCallback(data.toString());
    })
}

leer(__dirname + '/archivo_1.txt', console.log)

function escribir(ruta, contenido, miCallback) {
    fs.writeFile(ruta, contenido, function (err, data) {
        if (err) {
            console.error('No he podido escribir el archivo')
        } else {
            console.log('Se ha escrito correctamente...');
            
        }
    })
}

/* escribir(__dirname + '/archivo_1.txt', 'Soy un archivo super pro', console.log) */

function borrar(ruta, miCallback) {
    fs.unlink(ruta, miCallback)
}

borrar(__dirname + '/archivo_1.txt', console.log)
