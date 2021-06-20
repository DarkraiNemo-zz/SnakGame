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
        context.fillStyle = "green";
        context.fillRect(snak[i].x, snak[i].y, box, box);
    }
}

function starto() {
    background();
    theSnak();

    let snakX = snak[0].x;
    let snakY = snak[0].Y;

    if (direction == "rigth") snakX += box;
    if (direction == "left") snakX -= box;
    if (direction == "up") snakY -= box;
    if (direction == "down") snakY += box;

    snak.pop();

    let newHead = {
        x: snakX, 
        y: snakY
    }

    snak.unshift(newHead);

}

let game = setInterval(starto, 100);