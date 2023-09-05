console.log('Rock, Paper, Scissors');

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = ['ROCK', 'PAPER', 'SCISSORS'];
    return choice[randomNumber];
}

function getPlayerChoice () {
    let choice = prompt('ROCK, PAPER, SCISSORS').toLocaleUpperCase();
    if (choice == 'ROCK' || choice == 'PAPER' || choice == 'SCISSORS') {
        return choice
    } else {
        alert('Enter From the Choices');
        return getPlayerChoice();
    }
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
