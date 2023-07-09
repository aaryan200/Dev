const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score');
const blockWidth = 100;
const blockHeight = 20;
let ballDiameter = 20;
const boardWidth = 560;
const boardHeight = 300;
const userStart = [230, 10];
let currentPosition = userStart;

const ballStart = [270, 40];
let ballcurrentPosition = ballStart;
let timerId;
let xVelocity = 2;
let yVelocity = 2;
let score = 0;

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

// all the blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
];

function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
}

addBlocks();

// add user
const user = document.createElement('div');
user.classList.add('user');
drawUser();
grid.appendChild(user);

// draw user
function drawUser() {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

// draw the ball
function drawBall() {
    ball.style.left = ballcurrentPosition[0] + 'px';
    ball.style.bottom = ballcurrentPosition[1] + 'px';
}

// move user
function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10;
                drawUser();
            }
            break;
        case 'ArrowRight':
            if (currentPosition[0] < boardWidth - blockWidth) {
                currentPosition[0] += 10;
                drawUser();
            }
            break;
    }
}

document.addEventListener('keydown', moveUser);

// add ball
const ball = document.createElement('div')
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);

// move the ball
function moveBall() {
    ballcurrentPosition[0] += xVelocity;
    ballcurrentPosition[1] += yVelocity;
    drawBall();
    checkForCollisions();
}

timerId = setInterval(moveBall, 20);

function takeAction(allBlocks, i) {
    allBlocks[i].classList.remove('block');
    blocks.splice(i,1);
    score++;
    scoreDisplay.innerHTML = "<h3>Score: "+score + "</h3>";
}

// check for collisions
function checkForCollisions() {
    // check for block collisions
    for (let i = 0; i < blocks.length; i++) {
        const allBlocks = Array.from(document.querySelectorAll('.block'));
        // collision on left boundary
        if ((ballcurrentPosition[0] + ballDiameter >= blocks[i].bottomLeft[0]) && (ballcurrentPosition[0] + ballDiameter < blocks[i].bottomRight[0]) && (ballcurrentPosition[1] + ballDiameter > blocks[i].bottomLeft[1]) && ballcurrentPosition[1] <= blocks[i].topLeft[1]) {
            xVelocity *= -1;
            takeAction(allBlocks, i);
        }
        // collision on right boundary
        else if (ballcurrentPosition[0] <= blocks[i].bottomRight[0] && ballcurrentPosition[0] > blocks[i].bottomLeft[0] && (ballcurrentPosition[1] + ballDiameter > blocks[i].bottomLeft[1]) && ballcurrentPosition[1] <= blocks[i].topLeft[1]) {
            xVelocity *= -1;
            takeAction(allBlocks, i);
        }
        // collision on bottom boundary
        else if (ballcurrentPosition[0] > blocks[i].bottomLeft[0] && ballcurrentPosition[0] <= blocks[i].bottomRight[0] &&(ballcurrentPosition[1] + ballDiameter >= blocks[i].bottomLeft[1]) && (ballcurrentPosition[1] + ballDiameter < blocks[i].topLeft[1])) {
            yVelocity *= -1;
            takeAction(allBlocks, i);
        }
        // collision on top boundary
        else if (ballcurrentPosition[0] > blocks[i].bottomLeft[0] && ballcurrentPosition[0] <= blocks[i].bottomRight[0] &&ballcurrentPosition[1] > blocks[i].bottomLeft[1] && ballcurrentPosition[1] <= blocks[i].topLeft[1]) {
            yVelocity *= -1;
            takeAction(allBlocks, i);
        }
        if (blocks.length == 0) {
            scoreDisplay.innerHTML = "<h3>YOU WIN!!</h3>";
            clearInterval(timerId);
            document.removeEventListener('keydown', moveUser);
        }
    }

    // check for wall collisions
    if (ballcurrentPosition[0] >= (boardWidth - ballDiameter)) {
        xVelocity *= -1;
    }
    if (ballcurrentPosition[1] >= (boardHeight - ballDiameter)) {
        yVelocity *= -1;
    }
    if (ballcurrentPosition[0] <= 0) {
        xVelocity *= -1;
    }
    // check for game over when ball hits bottom
    if (ballcurrentPosition[1] <= 0) {
        clearInterval(timerId);
        scoreDisplay.innerHTML = "<h3>You Lost!</h3>";
        document.removeEventListener('keydown', moveUser);
        yVelocity *= -1;
    }
    // check for user collisions
    // left boundary
    if ((ballcurrentPosition[0] + ballDiameter == currentPosition[0]) && (ballcurrentPosition[1] + ballDiameter > currentPosition[1]) && ballcurrentPosition[1] <= currentPosition[1] + blockHeight) {
            xVelocity *= -1;
        }
        // right boundary
    else if ((ballcurrentPosition[0] == currentPosition[0] + blockWidth) && (ballcurrentPosition[1] + ballDiameter > currentPosition[1]) && (ballcurrentPosition[1] <= currentPosition[1] + blockHeight)) {
        xVelocity *= -1;
    }
    // top boundary
    else if (ballcurrentPosition[0] > currentPosition[0] && (ballcurrentPosition[0] <= currentPosition[0] + blockWidth) &&(ballcurrentPosition[1] <= currentPosition[1] + blockHeight) && (ballcurrentPosition[1] > currentPosition[1])) {
        yVelocity *= -1;
    }
}