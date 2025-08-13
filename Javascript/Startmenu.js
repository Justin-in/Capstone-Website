const myBox = document.getElementById('StartMenu');

myBox.addEventListener('animationend', () => {
    myBox.remove();
    console.log('Box removed after animation.');
});