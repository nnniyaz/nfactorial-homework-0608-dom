const song = document.getElementById('song');
const playbtn = document.getElementById('play');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');

function playAudio() {
    if (song.paused) {
        song.play();
        playbtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    else {
        song.pause()
        playbtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

function increaseVolume() {
    song.volume += 0.1;
}

function decreaseVolume() {
    song.volume -= 0.1;
}

function progressUpdate(ev) {
    const { duration, currentTime } = ev.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function progressSet(ev) {
    const width = this.clientWidth;
    const clickX = ev.offsetX;
    const duration = song.duration;

    song.currentTime = (clickX / width) * duration;
}

song.addEventListener('timeupdate', progressUpdate);
progressContainer.addEventListener('click', progressSet);