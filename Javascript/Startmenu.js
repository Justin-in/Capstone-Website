const myBox = document.getElementById('StartMenu');

myBox.addEventListener('animationend', () => {
    myBox.remove(); // Removes the element from the DOM
    console.log('Box removed after animation.');
});