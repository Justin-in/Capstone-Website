// document.getElementById('innermenu').disable = true;
document.getElementById('ClickMenu').addEventListener('click', function () {

    // Hide the menu
    this.style.display = 'none';
    // Play the music (in case autoplay was blocked)
    const audio = document.getElementById('background-music');
    audio.play();
    function FullVolume() {
        vid.volume = 1.0;
    }
});


// const aniatedElement = document.getElementById('Menu');

// animatedElement.addEventListener('animationend', () => {
//     animatedElement.style.display = 'none'; // Remove the element from the DOM
// });

document.body.style.overflow = 'hidden'; // figure out way to create a settings to decrease volume etc.
