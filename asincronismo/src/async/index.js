const hacerAlgoAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Haciendo algo async'), 3000)
            : reject(new Error('Probando errores'))
    })
}

const haciendoAlgoAsync = async () => {
    const algo = await hacerAlgoAsync()
    console.log(algo);
}

console.log('Antes');
haciendoAlgoAsync()
console.log('Después');

// CAPTURANDO ERRORES

const otrafuncion = async () => {
    try {
        const algo = await hacerAlgoAsync()
        console.log(algo)
    } catch (error) {
        console.error(error);    
    }
}



console.log('Antes 2');
otrafuncion()
console.log('Después 2');
