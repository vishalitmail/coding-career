//-----------1-----------
/*
let dolphin1 = 44;
let dolphin2 = 23;
let dolphin3 = 71;



let kolas1 = 65;
let kolas2 = 54;
let kolas3 = 49;

const calcAverage = (match1, match2, match3) => {
    return (match1 + match2 + match3) / 3;
}

const dolphinAvg = calcAverage(dolphin1, dolphin2, dolphin3);
const kolasAvg = calcAverage(kolas1, kolas2, kolas3);

dolphinAvg >= 2 * kolasAvg ? console.log('Dolphin win')
    : kolasAvg >= 2 * dolphinAvg ? console.log('Kolas win')
        : console.log("draw");
*/

//-----------2-----------
/*
const calcTip = (bill) => bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
//console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [];
const total = [];
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(tips[i] + bills[i]);

}
console.log(bills);
console.log(tips);
console.log(total);
*/
//-----------3-----------
/*
const Mark = {
    full_name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: (mass, height) => {
        Mark.BMI = mass / (height ** 2);
        return mass / (height ** 2);
    }
}
Mark.calcBMI(Mark.mass, Mark.height);
console.log(Mark);
const John = {
    full_name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: (mass, height) => {
        John.BMI = mass / (height ** 2);
        return mass / (height ** 2);
    }
}
John.calcBMI(John.mass, John.height);
console.log(John);


if (John.BMI > Mark.BMI) {
    console.log(`John's BMI (${John.BMI}) is higher than Mark's (${Mark.BMI})`);
} else if (John.BMI < Mark.BMI) {
    console.log(`Mark's BMI (${Mark.BMI}) is higher than John's (${John.BMI})`);
} else {
    console.log(`Mark's BMI (${Mark.BMI}) is equal to John's (${John.BMI})`);
}
*/
//-----------4-----------
/*

const calcTip = (bill) => bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
//console.log(calcTip(100));
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(tips[i] + bills[i]);

}
const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}
// console.log(bills);
// console.log(tips);
// console.log(total);
console.log(calcAverage(total));
*/
//-----------Happy Done😂😊😘😍❤️✌️👌-----------