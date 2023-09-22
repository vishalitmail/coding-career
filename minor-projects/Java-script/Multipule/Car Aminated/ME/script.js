let audio = new Audio("sound.mp3");

let music = function () {
    audio.loop = true;
    audio.play(1);
}