import { Transform } from "stream";

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

// process.stdin.pipe(transformStream).pipe(process.stdout)

/* TODO
Crear una Función en node que reciba una cadena de texto y 
la convierta en camel case usando streams.
*/

function camelCase(str) {
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase();
    });
}

const toCamelCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(camelCase(chunk.toString()));
    callback();
  },
});

process.stdin.pipe(toCamelCase).pipe(process.stdout);
