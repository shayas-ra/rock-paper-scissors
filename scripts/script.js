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

function playRound(player, computer) {
  if (player == computer) {
    return `Player Selected = "${player}" , Computer Selected = "${computer}"
    It'a a TIE`;
  } else if (player == "ROCK" && computer == "PAPER") {
    return `Player Selected = "${player}" , Computer Selected = "${computer}"
    You Lose! Paper beats Rock`;
  } else if (player == "ROCK" && computer == "SCISSORS") {
    return `Player Selected = "${player}" , Computer Selected = "${computer}"
    You Win! Rock beats Scissors`;
  } else if (player == "PAPER" && computer == "ROCK") {
    return `Player Selected = "${player}" , Computer Selected = "${computer}"
    You Win! Paper beats ROCK`;
  } else if (player == "PAPER" && computer == "SCISSORS") {
    return `Player Selected = "${player}" , Computer Selected = "${computer}"
    You Lose! Scissors beats Paper`;
  } else if (player == "SCISSORS" && computer == "ROCK") {
    return `Player Selected = "${player}" , Computer Selected = "${computer}"
    You Lose! Rock beats Scissors`;
  } else if (player == "SCISSORS" && computer == "PAPER") {
    return `Player Selected = "${player}" , Computer Selected = "${computer}"
    You Win! Scissors beats Paper`;
  }
}

function game() {
  return playRound(playerSelection(), computerSelection());
}

for (let i = 0; i < 5; i++) {
  console.log(game());
}
