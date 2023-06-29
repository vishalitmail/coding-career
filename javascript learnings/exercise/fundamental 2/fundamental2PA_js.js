//-------------1------------------
/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

// console.log(describeCountry("Finland", 6, "Helsinki"));
let finland = describeCountry("Finland", 6, "Helsinki");
let india = describeCountry("India", 1400, "Delhi");
let pakistan = describeCountry("Pakistan", 240, "Lahore");
console.log(pakistan);
console.log(india);
console.log(finland);
*/

//-------------2------------------
/*
function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

let finland = percentageOfWorld1(6);
let india = percentageOfWorld1(1400);
let pakistan = percentageOfWorld1(240);

console.log(pakistan);
console.log(india);
console.log(finland);
*/
/*
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100
}
let finland = percentageOfWorld2(6);
let india = percentageOfWorld2(1400);
let pakistan = percentageOfWorld2(240);

console.log(pakistan);
console.log(india);
console.log(finland);
*/
/*
const percentageOfWorld3 = (population) => (population / 7900) * 100;
let finland = percentageOfWorld3(6);
let india = percentageOfWorld3(1400);
let pakistan = percentageOfWorld3(240);

console.log(pakistan);
console.log(india);
console.log(finland);
*/

//-------------3------------------
/*
function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${Math.floor(percentageOfWorld1(population)) ? Math.floor(percentageOfWorld1(population)) : "near zero"} % of the world`;


let finland = describePopulation("Finland", 6);
let india = describePopulation("India", 1400);
let pakistan = describePopulation("Pakistan", 240);

console.log(pakistan);
console.log(india);
console.log(finland);
*/
//-------------4------------------
/*
function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

const populations = [600, 1400, 240, 420];
console.log(populations.length === 4 ? true : false);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);
*/

//-------------5------------------
/*
const neighbour = ["India", "China", "Afganistan", "Russia"];
console.log(neighbour);
neighbour.push("Utopia");
console.log(neighbour);
neighbour.pop();
console.log(neighbour);
if (neighbour.includes("Germany")) {

} else {
    console.log("Probably not a central European country:D");
}
neighbour[neighbour.indexOf("China")] = "Republic of Sweden";
console.log(neighbour);
*/

//-------------6------------------
/*
const myCountry = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: "1400",
    neighbours: ["Bangladesh", "Myanmar", "China", "Bhutan", "Nepal" , "Pakistan", "Afghanistan"]
}
*/

//-------------7------------------
/*
const myCountry = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 1400,
    neighbours: ["Bangladesh", "Myanmar", "China", "Bhutan", "Nepal", "Pakistan", "Afghanistan"]
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);
myCountry["population"] = myCountry["population"] - 2;
console.log(myCountry["population"]);
*/
//-------------8------------------
/*
const myCountry = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 1400,
    neighbours: ["Bangladesh", "Myanmar", "China", "Bhutan", "Nepal", "Pakistan", "Afghanistan"]
}
myCountry.describe = function () {
    return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
}
console.log(myCountry.describe())
myCountry.checkIsland = function () {
    this.neighbours.length > 0 ? this.isIsland = false : this.isIsland = true;

}
myCountry.checkIsland();
console.log(myCountry.isIsland);
*/

//-------------9------------------
/*
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}
*/
//-------------10------------------
/*
function percentageOfWorld1(population) {
    return (population / 7900) * 100
}
const populations = [600, 1400, 240, 420];
let percentage2;
for (let i = 0; i < populations.length; i++) {
    percentage2 === undefined ? percentage2 = [] : 1;
    percentage2.push(percentageOfWorld1(populations[i]));
}
console.log(percentage2);
*/
//-------------11------------------
/*
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour:${listOfNeighbours[i][j]}`);
    }
}
*/

//-------------12------------------
/*
function percentageOfWorld1(population) {
    return (population / 7900) * 100
}
const populations = [600, 1400, 240, 420];
let percentage2;
let i = 0;
while (i < populations.length) {
    percentage2 === undefined ? percentage2 = [] : 1;
    percentage2.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(percentage2);
*/