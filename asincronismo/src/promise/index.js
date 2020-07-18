// PROMISES - ECMASCRIPT 6

const algoVaAPasar = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve('Super, todo está correcto')
        } else {
            reject('Cataplum! algo salió mal amiguito.')
        }
    })
}

algoVaAPasar()
    .then(response => console.log(response))
    .catch(err => console.error(err))


const algoVaAPasar2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Super, todo está correcto nuevamente.')
            }, 2000)
        } else {
            const error = new Error('Cataplaum!!, algo salió mal de nuevo.');
            reject(error)
        }
    })
}

algoVaAPasar2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

Promise.all([algoVaAPasar(),algoVaAPasar2()])
    .then(response => {
        console.log('Arreglo de resultados', response);
    })
    .catch(err => {
        console.error(err)
    })