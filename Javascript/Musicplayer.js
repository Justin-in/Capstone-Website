// document.getElementById('innermenu').remove = true;

document.getElementById('Menu').addEventListener('click', function () {
    // Hide the menu
    this.style.display = 'none';
    // Play the music (in case autoplay was blocked)
    const audio = document.getElementById('background-music');
    audio.play();
});