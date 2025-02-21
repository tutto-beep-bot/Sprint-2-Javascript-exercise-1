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


                        //Ejercicio 1.4 Rest & Spread Operators


// Level 1 - Ejercicio 1

const array1 = [4, 5, 6]

const array2 = [1, 2, 3]

const mergedArray = [...array2, ...array1]

console.log(mergedArray) // Output: [4, 5, 6, 1, 2, 3]



// Level 1 - Ejercicio 2

function sum(...args){
    let sumTotal = 0
    for(let i = 0; i < args.length; i++){
        sumTotal += args[i]
    }
    return sumTotal
}

    // OR using slice()

function sum(...args){
    return args.reduce((total, arg) => total + arg, 0)
}


console.log(sum(1, 2, 3, 4, 5)) // Output: 15


//Level 2 - Ejercicio 3

const object1 = {
    name: 'Davi',
    age: 29,
    city: 'Barcelona'
};

const object2 = {...object1};

console.log(object2); // Output: name: 'Davi', age: 29, city: 'Barcelona'

//changing properties

object2.name = 'Raul';

console.log(object2); // Output: name: 'Raul', age: 29, city: 'Barcelona'
console.log(object1) // Output: name: 'Davi', age, 29, city 'Barcelona'



//Level 2 - Ejercicio 4

const array3 = ['Davi', 'Raul', 'Mateus', 'Sofia', 5600]

const [first, second, ...rest] = array3; 

console.log(first) 
console.log(second)
console.log(rest)


// Level 3 - Ejercicio 5

function multiply(a, b, c) {
    return a * b * c;
}

const numeros = [10, 6, 14]

console.log(multiply(...numeros))

// Level 3 - Ejercicio 6

const Person1 = {name: 'Davi', surname: 'Lessa'}

const Location = {city: 'Barcelona', country: 'Spain'}

const personWithLocation = {...Person1, ...Location}

console.log(personWithLocation) 



                        //Ejercicio 1.5 Array Transformations

// Level 1 - Ejercicio 1

const arrayMap = [1, 2, 3, 4]

const newArrayMap = arrayMap.map(i => i * i)

console.log(newArrayMap)



// Level 1 - Ejercicio 2

const arrayFilter = [1, 2, 3, 4]

const ArrayEven = arrayFilter.filter(i => (i % 2 == 0))

console.log(ArrayEven)


// Level 1 - Ejercicio 3

const arrayNumbers = [1, 10, 8, 11]

const arrayFind = arrayNumbers.find( i => i > 10)

console.log(arrayFind)



// Level 1 - Ejercicio 4

const arrayNumeros = [13, 7, 8, 21]

const arrayReduce = arrayNumeros.reduce((total, num) => total + num, 0)

console.log(arrayReduce)




// Level 2 - Ejercicio 5

const bigArray = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]
    .filter (i => i >= 10)
    .map (i => i * 2)
    .reduce((total, num) => total + num, 0);

console.log(bigArray)



// Level 3 - Ejercicio 6

const array10 = [11, 12, 13, 14]

const arrayCheckSome = array10.some(num => num > 10);
console.log(arrayCheckSome)

const arrayCheckEvery = array10.every(num => num > 10);
console.log(arrayCheckEvery)




                        //Ejercicio 1.6 Array Loops


//Level 1 - Ejercicio 1

let names = ['Anna', 'Bernat', 'Clara'];

names.forEach(element => { console.log(element)});

//Level 1 - Ejercicio 1