console.log('hello typescript');

// Boolean

let muted: boolean = true;

// Numbers

let numerator: number = 42;
let denominator: number = 6;
let result = numerator / denominator;

// String

let my_name: string = 'Cristian';

let greeting = `My name is ${my_name}`;

console.log(greeting);


// Arrays

let people: string[]=[];
people = ['cristian','peter','clara']


let peopleAndNumbers : Array< string | number > = []

peopleAndNumbers.push('Carlos');
peopleAndNumbers.push(1);


// Enum

enum Colors{
    Red = "Red",
    Green = "Green",
    Yellow = "Yellow",
    Blue = "Blue",
}


let favouriteColor = Colors.Blue;

console.log(`My favourite color is ${favouriteColor}`);

let comodin: any = "Joker";

comodin = { type: 'Wildcard' };


//Functions

function add(a: number, b: number) : number {
    return a+b;
}

const sum = add(4,6);


function createAdder(a:number): (number) => number {
    return function (b:number) {
        return b+a;
    }
}

const addFour = createAdder(4);

const fourPlus6 = addFour(6);


// Interfaces


interface Rectangle {
    height : number,
    width : number,
}