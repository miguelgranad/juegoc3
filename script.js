const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let square = {
    x: 50,
    y: 50,
    size: 20,
    color: 'red'
};

function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = square.color;
    ctx.fillRect(square.x, square.y, square.size, square.size);
}

function moveSquare(direction) {
    switch (direction) {
        case 'up':
            square.y -= 5;
            break;
        case 'down':
            square.y += 5;
            break;
        case 'left':
            square.x -= 5;
            break;
        case 'right':
            square.x += 5;
            break;
    }
    drawSquare();
}

function handleKeydown(e) {
    switch (e.key) {
        case 'ArrowUp':
            moveSquare('up');
            break;
        case 'ArrowDown':
            moveSquare('down');
            break;
        case 'ArrowLeft':
            moveSquare('left');
            break;
        case 'ArrowRight':
            moveSquare('right');
            break;
    }
}

function handleTouchStart(e) {
    const button = e.target.id;
    moveSquare(button);
    e.preventDefault(); // Prevent default touch behavior
}

window.addEventListener('keydown', handleKeydown);
document.getElementById('up').addEventListener('touchstart', handleTouchStart);
document.getElementById('down').addEventListener('touchstart', handleTouchStart);
document.getElementById('left').addEventListener('touchstart', handleTouchStart);
document.getElementById('right').addEventListener('touchstart', handleTouchStart);

drawSquare();
