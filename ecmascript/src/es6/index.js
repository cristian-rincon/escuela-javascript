function newFunction(name, age, country) {
    var name = name || 'cristian';
    var age = age || 24;
    var country = country || 'CO';
    console.log(name, age, country);

}


// ES6
function newFunction2(name = 'cristian', age = 24, country = 'CO') {
    console.log(name, age, country);

}

newFunction2();
newFunction2('Stitch', 1, 'CO');

// TEMPLATE LITERALS

let hello = 'Hello'
let world = 'World'
let epicPhrase1 = hello + ' ' + world // BEFORE ES6
let epicPhrase2 = `${hello}, ${world}` //ES6

console.log(epicPhrase2);
console.log(epicPhrase2);

// MULTILINE

let lorem = "lorem  \n" + 'ipsum'

//ES6
let loremES6 = `LOREM
IPSUM`

console.log(lorem);
console.log(loremES6);

// DATA DESTRUCT

let person = {
    'name': 'Cristian',
    'age': 24,
    'country': 'MX'
}

console.log(person.name, person.age);

let {
    name,
    age
} = person; //ES6

console.log(name, age); //ES6


let team1 = ['Cristian', 'Stitch', 'Suly']
let team2 = ['Alejandro', 'Tomás', 'María']

let education = ['Lucia', ...team1, ...team2]

console.log(education);

// Var is Global , Let is Block

{
    var globalVar = 'Global Var'
}


{
    let globalLet = 'Global Let'
    console.log(globalLet) // Right way
}


console.log(globalVar);
console.log(globalLet); //Will fail


const a = 'a'; // CONST is inmmutable



// OBJECTS


let name = 'Cristian'
let age = 24

//ES5
object1 = {
    name: name,
    age: age
}

//ES6
object2 = {
    name, age
}

console.log(object2);


// OBJECTS ES6
const names = [
    {
        name: 'Cristian', age: 23
    },
    {
        name: 'Stitch', age: 1
    },

]

let listOfNames = names.map(function (item) {
    console.log(item.name);
    
})


let listOfNames2 = names.map(item => console.log(item.name)) // ES6 - ARROW FUNCTIONS
/* 
const listOfNames3 = (name, age) => {
    console.log(name , age)
} */

const listOfNames4 = name => {
    //
}

const square = num => num * num;

console.log(square(1, 1)); 

// PROMISES ES6  - WITH ARROW FUNCTIONS

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Yeah!')
        }  else {
            reject('Oops!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.error(error))


import { hello } from './module'

hello();

// GENERATORS

function* helloWorld() {
    if (true) {
        yield 'Hello, '
    }
    if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
