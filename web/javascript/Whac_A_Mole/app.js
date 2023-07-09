const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const audio = new Audio("audio/punch.mp3");

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSqr = squares[Math.floor(Math.random()*9)];
    randomSqr.classList.add('mole');
    hitPosition = randomSqr.id;
}

function playAudio() {
    audio.play();

    setTimeout(() => {
    audio.pause();
        audio.currentTime = 0;
    }, 700);
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        playAudio();
        if (square.id == hitPosition ) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
});

function moveMole() {
    timerId = setInterval(randomSquare, 900);
}

moveMole()

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime == 0) {
        clearInterval(timerId);
        clearInterval(countDownTimerId);
        alert('GAME OVER! Your final score is ' + result);
    }
}

let countDownTimerId = setInterval(countDown, 1000);