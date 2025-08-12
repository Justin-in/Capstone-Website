// Generic popup creator
function createPopup(title, contentHTML) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const dialog = document.createElement('div');
    dialog.className = 'popup';
    dialog.innerHTML = `
        <button class="close-btn">&times;</button>
        <h1>${title}</h1>
        <div class="popup-content">${contentHTML}</div>
    `;

    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    // Close when clicking X
    overlay.querySelector('.close-btn').addEventListener('click', () => {
        overlay.remove();
    });

    // Close when clicking outside
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
}

// About popup
document.getElementById('About').addEventListener('click', () => {
    createPopup("About", `
        <p>What should be in this page lol</p>
        <p>I'm low</p>
        <p>I like music doe</p>
        <p>Anyways this is done, give it actual text another time</p>
        <button id="start-game">Start Game</button>
    `);
});

// Settings popup
document.getElementById('Settings').addEventListener('click', () => {
    createPopup("Settings", `
        <label>
            Volume: <input type="range" min="0" max="100">
        </label>
        <br><br>
        <label>
            Theme:
            <select>
                <option>Light</option>
                <option>Dark</option>
            </select>
        </label>
    `);
});
