// document.getElementById('innermenu').disable = true;

document.getElementById('Menu').addEventListener('click', function () {
    // Hide the menu
    this.style.display = 'none';
    // Play the music (in case autoplay was blocked)
    const audio = document.getElementById('background-music');
    audio.play();
    function FullVolume() {
        vid.volume = 1.0;
    }
});

document.body.style.overflow = 'hidden'; // figure out way to create a settings to decrease volume etc.
