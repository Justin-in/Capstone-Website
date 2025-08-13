// document.getElementById('innermenu').disable = true;
document.getElementById('ClickMenu').addEventListener('click', function () {

    // Hide the menu
    this.style.display = 'none';

    const audio = document.getElementById('background-music');
    audio.play();
});

// const aniatedElement = document.getElementById('Menu');

// animatedElement.addEventListener('animationend', () => {
//     animatedElement.style.display = 'none'; // Remove the element from the DOM
// });

document.body.style.overflow = 'hidden'; 
