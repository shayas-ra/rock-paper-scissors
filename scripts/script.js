console.log("Rock, Paper, Scissors");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let choice = ["ROCK", "PAPER", "SCISSORS"];
  return choice[randomNumber];
}

function getPlayerChoice() {
  let choice = prompt("ROCK, PAPER, SCISSORS").toLocaleUpperCase();
  if (choice == "ROCK" || choice == "PAPER" || choice == "SCISSORS") {
    return choice;
  } else {
    alert("Enter From the Choices");
    return getPlayerChoice();
  }
}

let computerSelection = getComputerChoice;
let playerSelection = getPlayerChoice;
let playerScore = 0;
let computerScore = 0;

function playRound(player, computer) {
  if (player == computer) {
    playerScore += 0;
    computerScore += 0;
    return `Player Selected = "${player}" Score = ${playerScore} , Computer Selected = "${computer} Score = ${computerScore}";
    It'a a TIE`;
  } else if (player == "ROCK" && computer == "PAPER") {
    playerScore += 0;
    computerScore += 1;
    return `Player Selected = "${player}" Score = ${playerScore} , Computer Selected = "${computer} Score = ${computerScore}";
    You Lose! Paper beats Rock`;
  } else if (player == "ROCK" && computer == "SCISSORS") {
    playerScore += 1;
    computerScore += 0;
    return `Player Selected = "${player}" Score = ${playerScore} , Computer Selected = "${computer} Score = ${computerScore}";
    You Win! Rock beats Scissors`;
  } else if (player == "PAPER" && computer == "ROCK") {
    playerScore += 1;
    computerScore += 0;
    return `Player Selected = "${player}" Score = ${playerScore} , Computer Selected = "${computer} Score = ${computerScore}";
    You Win! Paper beats ROCK`;
  } else if (player == "PAPER" && computer == "SCISSORS") {
    playerScore += 0;
    computerScore += 1;
    return `Player Selected = "${player}" Score = ${playerScore} , Computer Selected = "${computer} Score = ${computerScore}";
    You Lose! Scissors beats Paper`;
  } else if (player == "SCISSORS" && computer == "ROCK") {
    playerScore += 0;
    computerScore += 1;
    return `Player Selected = "${player}" Score = ${playerScore} , Computer Selected = "${computer} Score = ${computerScore}";
    You Lose! Rock beats Scissors`;
  } else if (player == "SCISSORS" && computer == "PAPER") {
    playerScore += 1;
    computerScore += 0;
    return `Player Selected = "${player}" Score = ${playerScore} , Computer Selected = "${computer} Score = ${computerScore}";
    You Win! Scissors beats Paper`;
  }
}

function game() {
  return playRound(playerSelection(), computerSelection());
}

// for (let i = 0; i < 5; i++) {
//   console.log(game());
// }

// if (playerScore > computerScore) {
//   console.log(`Player Score is ${playerScore} || Computer Score is ${computerScore}`);
//   console.log(`Player Wins!`);
// }
// else if (playerScore < computerScore) {
//   console.log(`Player Score is ${playerScore} || Computer Score is ${computerScore}`);
//   console.log(`Computer Wins!`)
// } else {
//   console.log(`Player Score is ${playerScore} || Computer Score is ${computerScore}`);
//   console.log("TIE!!!");
// }