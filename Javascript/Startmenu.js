const myBox = document.getElementById('StartMenu');

myBox.addEventListener('animationend', () => {
    myBox.remove();
    console.log('Box removed after animation.');
    this.style.display = 'none';
    const audio = document.getElementById('background-music');
    audio.play();
});


