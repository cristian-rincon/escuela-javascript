const { exec, spawn } = require('child_process');
const { stderr } = require('process');


/* exec('ls -la', (err, stdout, stderr) => {
    if (err) {
        console.error(err)
        return false;
    }

    console.log(stdout)
}) */

let proceso = spawn('ls', ['-la'])

console.log(proceso.pid);

proceso.stdout.on('data', function (data) {
    // console.log(proceso.killed);
    
    console.log(data.toString());
    
})


proceso.on('exit', function () {
    console.log('Proceso terminado');
})