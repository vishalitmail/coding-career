'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!'
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
let score = 20;

const displayMessage = function (msg) {
    document.querySelector('.message').textContent = msg;
}
// document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //When their is no number
    if (!guess) {

        displayMessage('⛔No Number!');
        //When player wins
    } else if (guess === secretNumber) {

        document.querySelector('.number').textContent = secretNumber;


        displayMessage('🎉Correct Number!');

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {

            displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');


            score--;

            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😒You Lost The Game';

            document.querySelector('.score').textContent = 0;
        }


    }
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈Too High'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😒You Lost The Game'
    //         document.querySelector('.score').textContent = 0;
    //     }


    //     //When player guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉Too Low'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😒You Lost The Game'
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
});
//Coding Challenge
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20 + 1);


    displayMessage('Start guessing...');

    document.querySelector('.guess').value = null;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('body').style.backgroundColor = '#222';
})