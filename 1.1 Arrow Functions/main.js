'use strict'

                        // Ejercicio 1.1 Arrow Functions 

// Level 1 - Ejercicio 1 

    // Funccion normal de suma
function sum(x, y) {
    return x + y;
}
    // version arrow function de suma

const suma = (x, y) => x + y;
console.log(sum(5, 3)); // Output: 8


//Level 1 - Ejercicio 2

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
console.log(randomNumber());


//Level 1 - Ejercicio 3

const Person = {
    name: 'Davi',
    greet: function() {
        const greeting = () => {
        console.log(`Hola, mi nombre es ${this.name}.`);
        }
        greeting();
    }
};

Person.greet(); // Output: Hola, mi nombre es Davi.


// Level 2 - Ejercicio 4

function printNumbers(numbers){
    for (let i = 0; i < numbers.length; i++) {
        const print = () => console.log(numbers[i]);
        print();
    }
}

printNumbers([1, 2, 3, 4, 5]); // Output: 1, 2, 3, 4, 5


// Level 3 - Ejercicio 5

setTimeout(() => console.log('This is a delayed message.'), 3000); // Output: This is a delayed message.


                        //Ejercicio 1.2 Ternary Operators

// Level 1 - Ejercicio 1

function canDrive(age) {
    return age >= 18 ? 'Can drive.' : 'Cannot drive.';
}

console.log(canDrive(16)); // Output: Cannot drive.
console.log(canDrive(32)); // Output: Can drive.


// Level 1 - Ejercicio 2

let num1 = 5;
let num2 = 13;
let isGreater = (num1 > num2) ? `num1 is greater.` : `num2 is greater.`;


console.log(isGreater) // Output: num2 is greater.


// Level 2 - Ejercicio 3

let num = 1

let checkNumber = (num) => 
    num > 0 ? 'Positive.' :
    num < 0 ? 'Negative.' :
    'Zero.'

console.log(checkNumber(3)) // Output: Positive.


// Level 3  - Ejercicio 4

const numbers = [1, 2, 3, 4, 5];

function evenOrOdd(numbers) {
    for(let i = 0; i < numbers.length; i++){
        (numbers[i] % 2 === 0) ? console.log(`${numbers[i]} is even.`) : console.log(`${numbers[i]} is odd.`);
    }
}

evenOrOdd(numbers); // Output: 1 is odd., 2 is even., 3 is odd., 4 is even., 5 is odd.




                        //Ejercicio 1.3 Callbacks 

// Level 1 - Ejercicio 1

function process(number, callback) {
    console.log(`The number is ${number}.`);
    callback();
}

function goodDay() {
    console.log('Have a good day.');
}

process(5, goodDay); // Output: The number is 5. Have a good day.


// Level 1 - Ejercicio 2

function calculator(num1, num2, operation) {
    return operation(num1, num2);
}

function sum(a, b) {
    return a + b;
}

console.log(calculator(3, 4, sum)) // Output: 7


// Level 2 - Ejercicio 3

function waitAndGreet(name, callback) {
    setTimeout(() => callback(name), 2000) 
}

function greet(name) {
    console.log(`Hello, ${name}!`);
}

waitAndGreet('Davi', greet) //Output: Hello, Davi! (2 seconds later)


// Level 2 - Ejercicio 4

const array = ['Ford', 'Volkswagen', 'BMW', 'Chevrolet', 'Renault']

function processElements(list, callback){
    for(let i = 0; i < list.length; i++){
        callback(list[i])
    }
}

function capitalize(car){
    console.log(car.toUpperCase())
}

processElements(array, capitalize) // Output: FORD, VOLKSWAGEN, BMW, CHEVROLET, RENAULT


// Level 3 - Ejercicio 5

function processString(char, callback){
    let charUpper = char.toUpperCase()
    callback(charUpper)
}

function printChar(char){
    console.log(`This is your string in upper case: ${char}.`)
}

processString('cibernarium', printChar) // Output: This is your string in upper case: CIBERNARIUM.