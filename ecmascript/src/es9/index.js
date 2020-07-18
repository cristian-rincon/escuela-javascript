// standby operator

const objeto = {
    'name': 'Cristian',
    'age': 24,
    'country': 'MX'
}

let  { name, ...all } = objeto

console.log(name);


const objeto = {
    'name': 'Cristian',
    'age': 24,
}

const objeto2 = {
    ...objeto,
    'country': 'MX'
}

console.log(objeto2);


// ASYNC & AWAIT

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello, promises'), 1000)
            : reject(new Error('Oops! Error'))

    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.error(error))
    .finally(() => console.log('Finalizó')) //ES9

// REGEX - DATE AAAA-YY-DD

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ 

const match = regexData.exec('2018-04-02')

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);

