
function createPopup(title, contentHTML, onPopupCreated) {
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

    if (onPopupCreated && typeof onPopupCreated === 'function') {
        onPopupCreated(dialog);
    }
}

document.getElementById('About').addEventListener('click', () => {
    createPopup("About", `
            <p> This Game is a project to help with cluster headaches </p>
            <br>
            <p> The game uses sound and light to help with the pain </p>
            <br>
            <p> The primary colors used are green and blue. Green is a color that helps the headaches while blue doesnt the reason why i decided to implement it like this is to visualize how the pain comes and goes </p>
        `);
});

document.getElementById('Settings').addEventListener('click', () => {
    createPopup("Settings",
        `<label>Volume: <input type="range" min="0" max="100"></label><br><br><label>Language: <select><option value="en">English</option></label>`,
        (dialog) => {
            const volumeInput = dialog.querySelector('input[type="range"]');
            const audio = document.getElementById('background-music');
            if (volumeInput && audio) {
                volumeInput.addEventListener('input', () => {
                    audio.volume = volumeInput.value / 100;
                });
            }
        });
});

