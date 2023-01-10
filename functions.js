"use strict";

const choices = document.getElementsByClassName('choice');
const player = document.querySelector('.player-score');
const computer = document.querySelector('.computer-score');
const matchResults = document.querySelector('.match-result-text');
const modal = document.getElementById('modal-container');
const winner = document.getElementById('modal-winner');
const playAgainButton = document.getElementById('play-again-button');

let playerSelectionImg = document.querySelector('.player-choice img');
let computerSelectionImg = document.querySelector('.computer-choice img');
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let matchCounter = 0;
let isGameOver = false;

function game(event) {
    let playerSelection = event.target.alt;
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    populateSelectionImg(playerSelection, computerSelection);
    endGame();
}

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);

    if (randNum === 0) {
        return 'Rock';
    } else if (randNum === 1) {
        return 'Paper';
    } else if (randNum === 2) {
        return 'Scissors';
    } else {
        return 'Something went wrong!';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        matchResults.textContent = 'You win! Rock beats Scissors.';
        updatePlayerScore();
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        matchResults.textContent = 'You lose! Paper beats Rock.';
        updateComputerScore();
     } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        matchResults.textContent = 'You lose! Scissors beats Paper.';
        updateComputerScore();
     } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        matchResults.textContent = 'You win! Paper beats Rock.';
        updatePlayerScore();
     } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        matchResults.textContent = 'You lose! Rock beats Scissors.';
        updateComputerScore();
     } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        matchResults.textContent = 'You win! Scissors beats Paper.';
        updatePlayerScore();
     } else if (playerSelection === computerSelection) {
        matchResults.textContent = 'Tie!';
        ties++;
    } else {
        matchResults.textContent = 'Something went wrong!';
    }
}

function updatePlayerScore() {
    playerScore++;
    player.textContent = playerScore;
    player.classList.add('blue-highlight');
    player.addEventListener('transitionend', removeTransition);
}

function updateComputerScore() {
    computerScore++;
    computer.textContent = computerScore;
    computer.classList.add('blue-highlight');
    computer.addEventListener('transitionend', removeTransition);
}

function removeTransition(event) {
    if (event.propertyName != 'transform') return;
    this.classList.remove('blue-highlight');
}

function populateSelectionImg (playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        playerSelectionImg.src = 
        'photos/rock-nobackground.png';
        playerSelectionImg.classList.add('blue-highlight');
        playerSelectionImg.addEventListener('transitionend', removeTransition);
    } else if (playerSelection === 'Paper') {
        playerSelectionImg.src = 
        'photos/paper-nobackground.png';
        playerSelectionImg.classList.add('blue-highlight');
        playerSelectionImg.addEventListener('transitionend', removeTransition);
    } else if (playerSelection === 'Scissors') {
        playerSelectionImg.src = 
        'photos/scissors-nobackground.png';
        playerSelectionImg.classList.add('blue-highlight');
        playerSelectionImg.addEventListener('transitionend', removeTransition);
    }

    if (computerSelection === 'Rock') {
        computerSelectionImg.src = 
        'photos/rock-nobackground.png';
        computerSelectionImg.classList.add('blue-highlight');
        computerSelectionImg.addEventListener('transitionend', removeTransition);
    } else if (computerSelection === 
        'Paper') {
        computerSelectionImg.src = 
        'photos/paper-nobackground.png';
        computerSelectionImg.classList.add('blue-highlight');
        computerSelectionImg.addEventListener('transitionend', removeTransition);
    } else if (computerSelection === 'Scissors') {
        computerSelectionImg.src = 
        'photos/scissors-nobackground.png';
        computerSelectionImg.classList.add('blue-highlight');
        computerSelectionImg.addEventListener('transitionend', removeTransition);
    }
}

function endGame() {
    if (playerScore === 5 || computerScore === 5) {
        isGameOver = true;
        modal.style.display = 'flex';
        setWinner();
        resetBoard();
    } 
}

function setWinner () {
    if (playerScore > computerScore) {
        winner.textContent = 'You win!';
    } else {
        winner.textContent = 'The Computer wins!';
    }
}

function resetBoard() {
    playAgainButton.addEventListener('click', () => {
        modal.style.display = 'none';
        isGameOver = false;
        playerScore = 0;
        player.textContent = playerScore;
        computerScore = 0;
        computer.textContent = computerScore;
        ties = 0;
        playerSelectionImg.src = 'photos/bubbles.png';
        computerSelectionImg.src = 'photos/bubbles.png';
        matchResults.textContent = '';
    })       
}