document.getElementById("playButton").addEventListener("click", function () {
    let audio = document.getElementById("background-music");
    if (audio) {
        audio.remove();
    }

    // startGame();
});


// check the function under for later aboaut the hover over for both the border and then the sound
// document.getElementById("playButton").addEventListener("mouseover", function () {
//     let hoverSound = new Audio('Audio/HoverSound.mp3');
//     hoverSound.play();
// }


document.getElementById("playButton").addEventListener("click", function () {
    console.log("HI HI");
});


