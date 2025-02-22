'use strict'


function sum(x, y) {
    return x + y;
}


const suma = (x, y) => x + y;
console.log(sum(5, 3)); 




const randomNumber = () => Math.floor(Math.random() * 100) + 1;
console.log(randomNumber());




const Person = {
    name: 'Davi',
    greet: function() {
        const greeting = () => {
        console.log(`Hola, mi nombre es ${this.name}.`);
        }
        greeting();
    }
};

Person.greet();




function printNumbers(numbers){
    for (let i = 0; i < numbers.length; i++) {
        const print = () => console.log(numbers[i]);
        print();
    }
}

printNumbers([1, 2, 3, 4, 5]);




setTimeout(() => console.log('This is a delayed message.'), 3000); 






function canDrive(age) {
    return age >= 18 ? 'Can drive.' : 'Cannot drive.';
}

console.log(canDrive(16)); 
console.log(canDrive(32)); 




let num1 = 5;
let num2 = 13;
let isGreater = (num1 > num2) ? `num1 is greater.` : `num2 is greater.`;


console.log(isGreater) 




let num = 1

let checkNumber = (num) => 
    num > 0 ? 'Positive.' :
    num < 0 ? 'Negative.' :
    'Zero.'

console.log(checkNumber(3)) 




const numbers = [1, 2, 3, 4, 5];

function evenOrOdd(numbers) {
    for(let i = 0; i < numbers.length; i++){
        (numbers[i] % 2 === 0) ? console.log(`${numbers[i]} is even.`) : console.log(`${numbers[i]} is odd.`);
    }
}

evenOrOdd(numbers); 







function process(number, callback) {
    console.log(`The number is ${number}.`);
    callback();
}

function goodDay() {
    console.log('Have a good day.');
}

process(5, goodDay); 




function calculator(num1, num2, operation) {
    return operation(num1, num2);
}

function sum(a, b) {
    return a + b;
}

console.log(calculator(3, 4, sum)) 




function waitAndGreet(name, callback) {
    setTimeout(() => callback(name), 2000) 
}

function greet(name) {
    console.log(`Hello, ${name}!`);
}

waitAndGreet('Davi', greet) 




const array = ['Ford', 'Volkswagen', 'BMW', 'Chevrolet', 'Renault']

function processElements(list, callback){
    for(let i = 0; i < list.length; i++){
        callback(list[i])
    }
}

function capitalize(car){
    console.log(car.toUpperCase())
}

processElements(array, capitalize) 





function processString(char, callback){
    let charUpper = char.toUpperCase()
    callback(charUpper)
}

function printChar(char){
    console.log(`This is your string in upper case: ${char}.`)
}

processString('cibernarium', printChar) 






const array1 = [4, 5, 6]

const array2 = [1, 2, 3]

const mergedArray = [...array2, ...array1]

console.log(mergedArray)






function sum(...args){
    let sumTotal = 0
    for(let i = 0; i < args.length; i++){
        sumTotal += args[i]
    }
    return sumTotal
}




function sum(...args){
    return args.reduce((total, arg) => total + arg, 0)
}


console.log(sum(1, 2, 3, 4, 5)) 




const object1 = {
    name: 'Davi',
    age: 29,
    city: 'Barcelona'
};

const object2 = {...object1};

console.log(object2); 



object2.name = 'Raul';

console.log(object2);
console.log(object1) 






const array3 = ['Davi', 'Raul', 'Mateus', 'Sofia', 5600]

const [first, second, ...rest] = array3; 

console.log(first) 
console.log(second)
console.log(rest)





function multiply(a, b, c) {
    return a * b * c;
}

const numeros = [10, 6, 14]

console.log(multiply(...numeros))




const Person1 = {name: 'Davi', surname: 'Lessa'}

const Location = {city: 'Barcelona', country: 'Spain'}

const personWithLocation = {...Person1, ...Location}

console.log(personWithLocation) 







const arrayMap = [1, 2, 3, 4]

const newArrayMap = arrayMap.map(i => i * i)

console.log(newArrayMap)





const arrayFilter = [1, 2, 3, 4]

const ArrayEven = arrayFilter.filter(i => (i % 2 == 0))

console.log(ArrayEven)




const arrayNumbers = [1, 10, 8, 11]

const arrayFind = arrayNumbers.find( i => i > 10)

console.log(arrayFind)





const arrayNumeros = [13, 7, 8, 21]

const arrayReduce = arrayNumeros.reduce((total, num) => total + num, 0)

console.log(arrayReduce)






const bigArray = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]
    .filter (i => i >= 10)
    .map (i => i * 2)
    .reduce((total, num) => total + num, 0);

console.log(bigArray)






const array10 = [11, 12, 13, 14]

const arrayCheckSome = array10.some(num => num > 10);
console.log(arrayCheckSome)

const arrayCheckEvery = array10.every(num => num > 10);
console.log(arrayCheckEvery)







let names = ['Anna', 'Bernat', 'Clara'];

names.forEach(element => { console.log(element)});




for (const element of names) {
    console.log(element);
}


let numbersArray = [1, 2, 3, 4, 5, 6];

let newNumbersArray = numbersArray.filter(element => element % 2 == 0)
console.log(newNumbersArray)





const objOna = {name: 'Ona', age: 25, city: 'Barcelona'}

for(let key in objOna){
    console.log(`${key}: ${objOna[key]}`)
}





let arrNumeros = [1, 2, 3, 4, 5, 6];

for(let element of arrNumeros){
    console.log(element);
    if(element == 5)
        break;
}





let nombres = ['Anna', 'Bernat', 'Clara']
let index = 0;

for(let element of nombres){
    console.log(`Index: ${index}. Element: ${element}`)
    index++;
}






const hello = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello, world!');
    }, 2000);
});




hello.then((message) => {
    console.log(message);
})




let input = "Hello"

const getInput = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(input === 'Hello') {
            resolve('Input is valid');
        } else {
            reject('Input is invalid');
        }
    }, 2000);
})

getInput
   .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })




async function printHello() {

        const message = await hello;
        console.log(message);
}

printHello()



async function printHello2() {
    try {
        const message = await hello;
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}



const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 1');
    }, 2000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 2');
    }, 3000);
});

Promise.all([promise1, promise2])
    .then((results) => {
        console.log('All promises resolved');
        console.log(results)
    })
    .catch((error) => {
        console.error(error);
    })