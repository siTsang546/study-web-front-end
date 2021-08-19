let random = Math.floor(Math.random() * 100);
console.log(random);
const guess = document.querySelector('.guess');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
// guessSubmit.onclick = checkGuess();

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guess.textContent = '上次猜的数：';
    }

    guess.textContent += userGuess + '  ';

    if (userGuess === random) {
        lastResult.textContent = '恭喜你猜对了!';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        guessCount = 0;
        setGameOver();
    } else {
        lastResult.textContent = '很遗憾,你猜错了.';
        lastResult.style.backgroundColor = 'red';
        if (userGuess > random) {
            lowOrHigh.textContent = '太高了';
        }
        if (userGuess < random) {
            lowOrHigh.textContent = '太低了';
        }
    }

    guessCount++;
    guessField.value = '';
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessSubmit.disabled = true;
    guessField.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = '开始新游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    let resetParas = document.querySelectorAll('.paras p');
    for (let i = 0;i < resetParas.length;i++) {
        resetParas[i].textContent = '';
    }
    guessSubmit.disabled = false;
    guessField.disabled = false;
    lastResult.style.backgroundColor = 'white';
    document.body.removeChild(resetButton);
    random = Math.floor(Math.random() * 100);
    console.log(random);
}