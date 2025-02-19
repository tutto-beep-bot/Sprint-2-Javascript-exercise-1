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

function isGreater(num1, num2) {
    return (num1 > num2) ? `num1 is greater.` : `num2 is greater.`;
}

console.log(isGreater(5, 3)) // Output: num1 is greater.


// Level 2 - Ejercicio 3

