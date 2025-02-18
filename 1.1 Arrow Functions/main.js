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