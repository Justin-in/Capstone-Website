const button = document.getElementById('about');

button.addEventListener('click', function () {
    const dialog = document.createElement('div');
    dialog.className = 'popup';
    dialog.innerHTML = `
    <h1>Welcome to the Game!</h1>
    <p>Click the button below to start playing.</p>
    <button id="start-game">Start Game</button>
    `;

    const innermenu = document.getElementById('GameMenu');
    console.log(innermenu);
    innermenu.appendChild(dialog);
});