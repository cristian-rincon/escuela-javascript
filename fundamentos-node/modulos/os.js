const os = require('os')
console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
//console.log(os.constants);

const SIZE = 1024 * 1024 * 1024

function gbites(mbytes) {
  return mbytes / SIZE
}
console.log(gbites(os.totalmem()));

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());



