const stateStatus = {
    Level1: "dawif",
    Level2: "aowdka"
};

function manageState(stateNumber) {
    switch (stateNumber) {
        case 0:
            console.log("Entering Level 1:", stateStatus.Level1);
            break;
        case 1:
            console.log("Entering Level 2:", stateStatus.Level2);
            break;
        default:
            console.warn("Unknown state:", stateNumber);
    }
}

document.getElementById("playButton").addEventListener("click", function () {
    let audio = document.getElementById("background-music");
    if (audio) {
        audio.remove();
    }


    createPopup("Select Level", `
        <button class="level-btn" onclick="manageState(0)">Level 1</button><br><br>
        <button class="level-btn" onclick="manageState(1)">Level 2</button>
    `);
});
