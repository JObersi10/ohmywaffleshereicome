const titleElement = document.getElementById("mainTitle");

function greet() {
    alert("you.. you actually clicked on me.. WAIT GO AWYA IM A MINOR!!");
}

function updateStyle() {
    titleElement.style.color = "lime";
    titleElement.style.fontSize = "50px";
    titleElement.style.backgroundColor = "black";
    titleElement.innerHTML = "LAB OVERHAULED";
}

function handleInput() {
    let input = document.getElementById("userInput").value;
    let display = document.getElementById("displayArea");

    if (input === "") {
        display.innerHTML = "I said TYPE SOMETHING. It's empty.";
        display.style.color = "red";
    } else {
        display.innerHTML = "Your soul '" + input + "' has been sent. Goodbye.";
        display.style.color = "blue";
    }
}

function runLoop() {
    console.log("spamming job working rn...");
    for (let i = 0; i < 10; i++) {
        console.log("el temper di yo " + i);
    }
    alert("Check the console (F12) if you care.");
}