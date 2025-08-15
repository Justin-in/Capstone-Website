const stateStatus = {
    Level1: "Tutorial",
    Level2: "First Level"
};

function manageState(stateNumber) {
    switch (stateNumber) {
        case 0:
            console.log("Entering The First Level:", stateStatus.Level);

            break;
        case 1:
            console.log("Entering The Second:", stateStatus.Level2);
            break;
        default:
            console.warn("Unknown state:", stateNumber);
    }
}

document.getElementById("playButton").addEventListener("click", function () {
    let audio = document.getElementById("background-music");
    if (audio) {

    }


    createPopup("Select Level", `
        <button class="level-btn" onclick="manageState(0)">Level 1</button><br><br>
        <button class="level-btn" onclick="manageState(1)">Level 2</button>
    `);
});
