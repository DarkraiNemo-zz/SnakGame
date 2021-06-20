let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snak = [];
snak[0] = {
    x: 8 * box,
    y: 8 * box
}

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
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

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box)
}

document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != "rigth") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}

function starto() {
    if (snak[0].x > 15 * box && direction == "right") snak[0].x = 0;
    if (snak[0].x < 0 && direction == "left") snak[0].x = 16 * box;
    if (snak[0].y > 15 * box && direction == "down") snak[0].y = 0;
    if (snak[0].y < 0 && direction == "up") snak[0].y = 16 * box;
    

    background();
    theSnak();
    drawFood();

    let snakX = snak[0].x;
    let snakY = snak[0].Y;

    if (direction == "rigth") snakX += box;
    if (direction == "left") snakX -= box;
    if (direction == "up") snakY -= box;
    if (direction == "down") snakY += box;

    if (snakX != food.x || snakY != food.y) {
        snak.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakX, 
        y: snakY
    }

    snak.unshift(newHead);

}

let game = setInterval(starto, 100);