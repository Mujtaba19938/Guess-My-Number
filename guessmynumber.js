'use strict';

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 5; // Maximum 5 guesses before popup
let highscore = 0;
let attempts = 0;

// Function to update message text
const displayMessage = message => {
    document.querySelector('.message').textContent = message;
};

// Function to handle the popup
const showPopup = () => {
    document.querySelector('.popup').classList.add('show');
};

// Function to hide the popup
const hidePopup = () => {
    document.querySelector('.popup').classList.remove('show');
};

// Function to reset the game
const resetGame = () => {
    score = 5;
    secretNumber = Math.trunc(Math.random() * 50) + 1;
    attempts = 0;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = '#292c29';
    hidePopup();
};

// Check button functionality
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    attempts++;

    if (!guess || guess < 1 || guess > 100) {
        displayMessage('⛔ Enter a number between 1 and 100!');
        return;
    }

    if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.body.style.backgroundColor = '#60b347';

        if (attempts === 1) {
            displayMessage('🎯 Looks like this is too easy! Now I will make it harder for you!');
        }

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
            document.body.style.backgroundColor = '#D32F2F';
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
            showPopup();
        }
    }
});

// Again button resets the game
document.querySelector('.again').addEventListener('click', resetGame);

// Popup retry button
document.querySelector('.retry').addEventListener('click', resetGame);

// Popup exit button
document.querySelector('.exit').addEventListener('click', hidePopup);
