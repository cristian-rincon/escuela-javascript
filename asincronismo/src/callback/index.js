// Callbacks - una función que recibe como parámetro otra función

// Example 1
function sum(num1, num2) {
    return num1 + num2
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(6,4,sum));


// Example 2
function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date
        callback(date)
    }, 2000)
}

function printDate(datenow) {
    console.log(datenow);
}

date(printDate)