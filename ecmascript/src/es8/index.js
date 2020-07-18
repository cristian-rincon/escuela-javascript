//

const data = {
    frontend: 'Cristian',
    backend: 'Stitch',
    designer: 'Flipper'
}


const entries = Object.entries(data)

console.log(entries);
console.log(entries.length);


// OBJECT VALUES

const data2 = {
    frontend: 'Cristian',
    backend: 'Stitch',
    designer: 'Flipper',
}

const values = Object.values(data)
console.log(values);
console.log(values.length);

//

const string1 = 'hello'

console.log(string1.padStart(8,'hi, '));
console.log(string1.padEnd(9, ', hi'));

// ASYNC & AWAIT

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ?  setTimeout(() => resolve('Hello, promises'), 1000)
            : reject( new Error('Oops! Error'))

    })
}

const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello);
}

helloAsync()

const lolfunction = async () => {
    try {
        const hello = await  helloWorld()
        console.log(hello);
        
    } catch (error) {
        console.error(error);
        
    }
}

lolfunction()