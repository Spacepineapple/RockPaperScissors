function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)+1;

    if (choice === 0) {
        return "Rock";
    }
    else if (choice === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    let player = playerChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if (player === computer) {
        return `It's a draw! You chose ${playerChoice} and the computer chose ${computerChoice}.`;
    }
    else if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "rock")) {
        return `You win! Your choice of ${playerChoice} beats the computers choice of ${computerChoice}.`;
    }
    else {
        return `You lose! The computers choice of ${computerChoice} beats your choice of ${playerChoice}.`;
    }
}

let playerChoice = prompt("Please choose one of: Rock, Paper or Scissors. Type your answer in full: ");
let computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));

