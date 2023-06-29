'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
const displayMovements = function (movements, sort = false) {

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  //Text content=0

  containerMovements.innerHTML = '';

  movs.forEach(function (mov, i) {


    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      
      <div class="movements__value">${Math.abs(mov)}€</div>
      </div>
   
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}


const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};


// console.log(containerMovements.innerHTML);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`
}






const createUsernames = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
    // console.log(acc);
  }
  )
}

createUsernames(accounts);

//Update account
const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
}


////////////
let currentAccount;

//Event Handlers
btnLogin.addEventListener('click', function (e) {
  //prevent from subbmit
  e.preventDefault();
  //
  currentAccount = accounts.find(acc => acc.username == inputLoginUsername.value);
  if (Number(inputLoginPin.value) === currentAccount?.pin) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);

  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(acc => acc.username == inputTransferTo.value);
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();


  if (amount > 0 && currentAccount.balance >= amount && recieverAcc?.username !== currentAccount.username) {

    //Doing a transffer

    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount)
    //Update UI
    updateUI(currentAccount);
    console.log(amount, recieverAcc);

  }
})

//Loan approval
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  //loan condition
  if (amount > 0 && currentAccount.movements.some((mov) => mov > 0.1 * amount)) {
    //Add movement
    currentAccount.movements.push(amount);
    //Update UI
    updateUI(currentAccount);


  }
  //Clear fields and cursor restore
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
})
//Closed account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (inputCloseUsername.value == currentAccount.username && Number(inputClosePin.value) == currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username)
    //Delete account
    accounts.splice(index, 1)
    //Hide UI
    containerApp.style.opacity = 0;
    //Clear fields
    inputCloseUsername.value = inputClosePin.value = '';
    inputClosePin.blur();
  }
})
let sorted = false
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted
})
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log('slice');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

console.log('splice');
//splice
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr.splice(1, 2));
console.log(arr);

console.log('Reverse');
//Reverse

const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

console.log('Concat');
const letters = arr1.concat(arr2);
console.log(arr1.concat(arr2));


console.log('Join');
console.log(letters.join(' 😒 '));

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting the last element

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));


console.log('vishal'.at(0));
console.log('vishal'.at(-1));


/////////////// forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, mov] of movements.entries()) {
  mov > 0 ? console.log(`You deposited ${Math.abs(mov)} $ in your account`) : console.log(`You collected ${Math.abs(mov)} $ from your account`);
}
console.log('-------------for each loop------');
movements.forEach(function (mov, i, arr) {
  mov > 0 ? console.log(`You deposited ${Math.abs(mov)} $ in your account`) : console.log(`You collected ${Math.abs(mov)} $ from your account`);
})


/////////////// forEach in map and set
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`the full form of ${key} is ${value}..✌️`);
});

const currenciesSet = new Set(['USD', 'EUR', 'GBP', 'USD', 'EUR', 'GBP'])

currenciesSet.forEach((value, _, map) => {
  console.log(`the full form of ${value} is ${value}..✌️`);
});
*/
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
challenge 1
const checkDogs = function (dogsJulia, dogsKate) {
  const noCatJulia = dogsJulia.slice(1, -2);
  const allDogs = noCatJulia.concat(dogsKate);
  // console.log(noCatJulia);
  // console.log(dogsKate);
  // console.log(allDogs);
  allDogs.forEach(function (el, i) {
    const msg = el >= 3 ? `Dog number ${i + 1} is an adult, and is ${el} years old` : `Dog number ${i + 1} is still a puppy 🐶`
    console.log(msg);
  });

};
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
checkDogs(julia, kate);
*/
/*
//map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1
const movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);
*/

/*
//fillter method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const withdrawlFor = movements.filter(mov => mov < 0)
console.log(withdrawlFor);

const max = movements.reduce((acc, mov) => acc > mov ? acc : mov);
console.log(max);
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
//coding challenge 3
const calcAverageHumanAge = function (dogAge) {
  const humanAge = dogAge
    .map(age => age <= 2 ? 2 * age : 16 + age * 4)
    .filter((age) => age >= 18).reduce((acc, age, i, humanAge) => {
      if (i == humanAge.length - 1) {
        acc += age;
        return acc / humanAge.length
      }
      return acc + age
    }, 0)
  console.log(humanAge);


};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
*/

//coding challenge 3
/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = (dogAge) => {
  const humanAge = dogAge
    .map(age => age <= 2 ? 2 * age : 16 + age * 4)
    .filter((age) => age >= 18).reduce((acc, age, i, humanAge) => i == humanAge.length - 1 ? (acc + age) / humanAge.length : (acc + age), 0)
  return humanAge;


};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

/*
//the find method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const withdrawal = movements.find(mov => mov < 0);
console.log(withdrawal);
*/

/*
//Some and every
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Equality only checked
console.log(movements.includes(-130));

//Condition can be checked

console.log(movements.some((mov) => mov === -130));
console.log(movements.some((mov) => mov > 2000));

*/

/*
//flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6,], 7, 8];

console.log(arr.flat());
const arr2 = [[[1, 2], 3], [4, [5, [6]]], 7, 8];
console.log(arr2.flat(3));


const Total = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov);

console.log(Total);
*/


/*
//Sorting

//Sorting strings

const friends = ['vishal', 'shubhanshu', 'naman', 'prakaash', 'tinku', 'vaibhav'];

console.log(friends.sort());

//Sorting numbers

// console.log(movements.sort());😒

//return <0 ,AB (Keep order)
//return >0 ,BA (Want to switch)

//Asending order
// console.log(movements.sort((a, b) => {
//   if (a > b) {
//     return 1;

//   }
//   if (a < b) {
//     return -1;
//   }
// }));
console.log(movements.sort((a, b) => a - b));

//Decending order
// console.log(movements.sort((a, b) => {
//   if (a > b) {
//     return -1;

//   }
//   if (a < b) {
//     return 1;
//   }
// }));
console.log(movements.sort((a, b) => b - a));
*/


//Array constructor and fill method
/*
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(new Array(7));

const x = new Array(7);
x.fill(1);
// x.fill(1, 3);
// x.fill(1, 2, 5)
console.log(x);
*/


/*
//from method

const y = Array.from({ length: 7 }, () => 1)
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1)

console.log(z);


labelBalance.addEventListener('click', function () {
  const movementUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));
  console.log(movementUI);
})
*/


///////////////////////////////////////
// Coding Challenge #4

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
///////////////////////////////////////
// Coding Challenge #4

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
///////////////////////////////////////
// Coding Challenge #4

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
///////////////////////////////////////
// Coding Challenge #4

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

//1
dogs.forEach(dog => dog.recommendedFood = dog.weight ** 0.75 * 28)

//2
dogs.forEach(dog => {
  if (dog.owners.find((own) => own == 'Sarah')) {

    if (dog.recommendedFood * 0.90 > dog.curFood) {
      console.log('it\'s eating too little');
    } else if (dog.recommendedFood * 1.10 < dog.curFood) {
      console.log('it\'s eating too much');
    } else {
      console.log('it\'s following a perfect diet');
    }
  }
})
//3
const ownersEatTooMuch = dogs.reduce((arr, dog) => {
  return dog.recommendedFood * 1.10 < dog.curFood ? arr.concat(dog.owners) : arr

}, [])
const ownersEatTooLittle = dogs.reduce((arr, dog) => {
  return dog.recommendedFood * 0.90 > dog.curFood ? arr.concat(dog.owners) : arr

}, [])


//4
console.log(ownersEatTooMuch.reduce((acc, own, i, arr) => {
  return i < arr.length - 1 ? acc += `${own} and ` : acc += `${own}'s dogs eat too much!`
}, ''));

console.log(ownersEatTooLittle.reduce((acc, own, i, arr) => {
  return i < arr.length - 1 ? acc += `${own} and ` : acc += `${own}'s dogs eat too little!`
}, ''));

//5
console.log(dogs.some((dog) => (dog.recommendedFood === dog.curFood)));

//6
console.log(dogs.some((dog) => !(dog.recommendedFood * 0.90 > dog.curFood) && !(dog.recommendedFood * 1.10 < dog.curFood)));

//7

console.log(dogs.reduce((arr, dog) => {
  return !(dog.recommendedFood * 0.90 > dog.curFood) && !(dog.recommendedFood * 1.10 < dog.curFood) ? arr.concat(dog.owners) : arr

}, []));


//8
console.log(dogs.sort((a, b) => a.recommendedFood - b.recommendedFood));
*/


