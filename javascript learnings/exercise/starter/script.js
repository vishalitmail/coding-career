'use strict';
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);
    function printAge() {
        let output = `${firstName}, You are ${age},born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true
            const firstName = 'Steven';
            const str = `oh,and you re a millenial, ${firstName}`;
            console.log(str);
            function add(a, b) {
                return a + b;
            }
            output = 'New Output'
        }
        console.log(output);
        // add(2, 3);
        console.log(millenial);
    }
    printAge();
    return age;
}

const firstName = 'jonas';
calcAge(1991);
// console.log(age);
// printAge();