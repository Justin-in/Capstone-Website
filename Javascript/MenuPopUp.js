
function createPopup(title, contentHTML, onPopupCreated) { // Add onPopupCreated callback
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const dialog = document.createElement('div');
    dialog.className = 'popup';
    dialog.innerHTML = `<button class="close-btn">&times;</button><h1>${title}</h1><div class="popup-content">${contentHTML}</div>`;

    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    overlay.querySelector('.close-btn').addEventListener('click', () => {
        overlay.remove();
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });

    if (onPopupCreated && typeof onPopupCreated === 'function') { // Execute callback after popup is created
        onPopupCreated(dialog); // Pass the dialog element to the callback
    }
}

document.getElementById('About').addEventListener('click', () => {
    createPopup("About", `
            < p > What should be in this page lol</p >
        <p>I'm low</p>
        <p>I like music doe</p>
        <p>Anyways this is done, give it actual text another time</p>
        `);
});


document.getElementById('Settings').addEventListener('click', () => {
    createPopup("Settings",
        `<label>Volume: <input type="range" min="0" max="100"></label><br><br><label>Language: <select><option value="en">English</option></label>`,
        (dialog) => { // The callback now receives the dialog element
            const volumeInput = dialog.querySelector('input[type="range"]'); // Query within the dialog
            const audio = document.getElementById('background-music'); // Still assumes audio is outside popup
            if (volumeInput && audio) { // Check if elements exist before adding listener
                volumeInput.addEventListener('input', () => {
                    audio.volume = volumeInput.value / 100;
                });
            }
        });
});

