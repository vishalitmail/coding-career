console.log('Welcome to spotify');

//Initialize the events
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: 'Challa (Main Lad Jaana)', filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Kar Har Maidaan Fateh', filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg' },
    { songName: 'Lakshya', filePath: 'songs/3.mp3', coverPath: 'covers/3.jpg' },
    { songName: 'O Sikander', filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg' },
    { songName: 'Soorma', filePath: 'songs/5.mp3', coverPath: 'covers/5.jpg' },
    { songName: 'Gun Gun Guna', filePath: 'songs/6.mp3', coverPath: 'covers/6.jpg' },
    { songName: 'Dangal - Title Track', filePath: 'songs/7.mp3', coverPath: 'covers/7.jpg' },
    { songName: 'Chak Lein De', filePath: 'songs/8.mp3', coverPath: 'covers/8.jpg' },
    { songName: 'Ruk Jana Nahin', filePath: 'songs/9.mp3', coverPath: 'covers/9.jpg' },
    { songName: 'Sultan Title', filePath: 'songs/10.mp3', coverPath: 'covers/10.jpg' },
    { songName: 'Yahan Ke Hum Sikandar', filePath: 'songs/11.mp3', coverPath: 'covers/11.jpg' },
    { songName: 'Zinda', filePath: 'songs/12.mp3', coverPath: 'covers/12.jpg' }

]
songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});
// audioElement.play();
//Handel play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        if (e.target.classList.contains('fa-play-circle')) {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        } else if (e.target.classList.contains('fa-pause-circle')) {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.paused();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
        }

    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 11) {
        songIndex = 0
    } else {
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 11
    } else {
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})