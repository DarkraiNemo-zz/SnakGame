let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snak = [];
snak[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function background() {
    context.fillStyle = "lightgreen"
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function theSnak() {
    for (i=0; i < snake.length; i++) {
        context.fillStyle = "blue";
        context.fillRect(snak[i].x, snak[i].y, box, box);
    }
}

background();
theSnak();