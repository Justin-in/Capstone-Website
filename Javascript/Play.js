/*
     You would have a variable that manages the state of the game:
     const stateNumber = 0/1/2/3/4 <--
     ** Alternative **
     const stateStatus = {
        "Level1": "dawif"
        "Level2" : "aowdka"
     }

     function manageState(stateNumber) {
        if (stateNumber === 0) {
        
        } else {
            
        }
     
     }


*/
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

