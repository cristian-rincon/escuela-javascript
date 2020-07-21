const fs = require("fs");

const file = process.argv[2];

if (!file) {
    throw new Error('Debes indicar la ruta del archivo que quieres leer.')
}

const content = fs.readFileSync(file, function (err, content) {
  if (err) {
    console.error(err);
  }
});
const lines = content.toString().split("\n").length;
console.log(lines);
