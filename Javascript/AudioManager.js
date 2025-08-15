const songs = [
    { title: "Hero", src: "Music/heropiano.mp3" },
    { title: "Tian Tian", src: "Music/TianTian.mp3" },
    { title: "Iron Lotus", src: "Music/IronLotusPiano.mp3" },
    { title: "Children of the city", src: "Music/Children.mp3" },
    { title: "Gone Angels", src: "Music/GoneAngels.mp3" },
];

let currentSongIndex = 0;
const audio = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const playPauseBtn = document.getElementById('playPause');
const nextBtn = document.getElementById('nextSong');
const prevBtn = document.getElementById('prevSong');
const seekBar = document.getElementById('seekBar');
const currentTimeDisplay = document.getElementById('current-time');
const totalTimeDisplay = document.getElementById('total-time');
const sessionTimerDisplay = document.getElementById('session-timer');
const volumeBar = document.getElementById('volumeBar');

let sessionStartTime;
let sessionInterval;


function loadSong(index) {
    audio.src = songs[index].src;
    songTitle.textContent = songs[index].title;
    audio.load();
}
loadSong(currentSongIndex);


function playSong() {
    audio.play();
    playPauseBtn.textContent = "Pause";
}
function pauseSong() {
    audio.pause();
    playPauseBtn.textContent = "Play";
}
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});


nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});


audio.addEventListener('timeupdate', () => {
    if (!isNaN(audio.duration)) {
        const progress = (audio.currentTime / audio.duration) * 100;
        seekBar.value = progress;
    }
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});


seekBar.addEventListener('input', () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
});


audio.addEventListener('loadedmetadata', () => {
    const minutes = Math.floor(audio.duration / 60);
    const seconds = Math.floor(audio.duration % 60);
    totalTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});


audio.volume = 1;
volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value;
});


function startSessionTimer() {
    sessionStartTime = Date.now();
    sessionInterval = setInterval(() => {
        const elapsed = Date.now() - sessionStartTime;
        const hours = Math.floor(elapsed / 3600000);
        const minutes = Math.floor((elapsed % 3600000) / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        sessionTimerDisplay.textContent = `Cluster Duration: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}
startSessionTimer();

loadSong(currentSongIndex);
playSong();


audio.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});


