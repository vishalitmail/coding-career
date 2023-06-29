'use strict';
/*function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW variable with same name as outer scope's variable 
            const firstName = 'steven'

            //Reassigning outer scope's variable
            output = 'NEW OUTPUT'


            const str = `oh,and you are a millenial, ${firstName}`
            console.log(str);
            function add(a, b) {
                return a + b;
            }

        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);



    }
    printAge();
    return age;
}
const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/
/*
//Variables hoisting
console.log(me);
// console.log(job);
// console.log(year);
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Function hoisting
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('all product deleted');

}
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.x);
console.log(z === window.x);
*/
/*
//this keyword practice

// console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}
// calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}
// calcAgeArrow(1991);

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }
};
jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
*/

/*
//regular function vs Arrow function
const jonas = {
    firstName: 'jonas',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        // console.log(2037 - this.year);

        //Solution 1
        // const self = this; //self or that
        // const isMillenial = function () {
        //     console.log(self);
        //     // console.log(this);
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }

        //Solution 2

        const isMillenial = () => {

            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);

        }
        isMillenial();
    },
    greet: () => console.log(`Hey ${this.firstName}`)
};
// jonas.greet();
jonas.calcAge();

//arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 6, 8);
var addArrow = (a, b) => {
    console.log(arguments);
    return a + b
};
addArrow(2, 5, 8)
*/
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'jonas',
    age: 30
};
const friend = me;
friend.age = 27;
console.log(me);
console.log(friend);
*/

/*
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'williams',
    age: 27
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before mariage', jessica);
console.log('After mariage', jessica);

// marriedJessica = {}


//Copying objects

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'williams',
    age: 27,
    family: ['Alice', 'Bob']
};
const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary', 'John')

console.log('Before mariage', jessica2);
console.log('After mariage', jessicaCopy);

*/