const titleElement = document.getElementById("mainTitle");
let wastedSeconds = 0;

setInterval(() => {
    wastedSeconds++;
    console.log("you wasted about, lets say " + wastedSeconds + "seconds!");
}, 1000);

function greet() {
    alert("you.. you actually clicked on me.. WAIT GO AWYA IM A MINOR!!");
}

function updateStyle() {
    titleElement.style.color = "lime";
    titleElement.style.fontSize = "50px";
    titleElement.style.backgroundColor = "black";
    titleElement.innerHTML = "boo :3";
}

function handleInput() {
    let input = document.getElementById("userInput").value;
    let display = document.getElementById("displayArea");

    if (input === "") {
        display.innerHTML = "I said TYPE SOMETHING. It's empty.";
        display.style.color = "red";
    } else {
        // Requirement: setTimeout - Fakes a "loading" state before sending the soul
        display.innerHTML = "Sending message to the moon or sum";
        display.style.color = "orange";

        setTimeout(() => {
            display.innerHTML = "Your soul '" + input + "' has been sent. Goodbye.";
            display.style.color = "blue";
        }, 1500);
    }
}

function runLoop() {
    console.log("spamming job working rn...");
    for (let i = 0; i < 10; i++) {
        console.log("el temper di yo " + i);
    }
    alert("check console gng");
}