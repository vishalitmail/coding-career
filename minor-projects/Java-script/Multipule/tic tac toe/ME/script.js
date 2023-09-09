console.log('Welcome to Tic Tac Toe');
let music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameOver = new Audio('gameover.mp3');
let turn = 'X';
let isGameOver = false;

//Function to change turn 
const changeTurn = () => {
    return turn === 'X' ? 'O' : 'X'
}

//Function to check for a  Win
const checkWin = () => {
    let boxTexts = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ];
    wins.forEach(e => {
        if (boxTexts[e[0]].innerText === boxTexts[e[1]].innerText && boxTexts[e[2]].innerText === boxTexts[e[1]].innerText && (boxTexts[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + ' Won'
            isGameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '25vh'
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
};

//Game logic
// music.play()
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click', (e) => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {

                document.getElementsByClassName('info')[0].innerText = "Turn for" + turn;
            }

        }
    })
});

//Add on click event on reset button
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxText')
    Array.from(boxText).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    isGameOver = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for" + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0vh'
    document.querySelector('.line').style.width = "0vw";
})

