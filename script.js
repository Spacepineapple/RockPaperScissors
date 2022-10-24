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

const container = document.querySelector('#container');

let playerScore = 0;
let computerScore = 0;

const scores = document.createElement('div');
scores.classList.add('scores');

const content = document.createElement('p');
content.classList.add('content');

const play = document.createElement('p');
play.classList.add('player');
play.style.backgroundColor = "Blue";
play.style.color = "White";

const comp = document.createElement('p');
comp.classList.add('computer');
comp.style.backgroundColor = "Red";

container.appendChild(scores);

function playRound(playerChoice) {
    let player = playerChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    computer = computerChoice.toLowerCase();

    if (player === computer) {
        content.textContent = `It's a draw! You chose ${playerChoice} and the computer chose ${computerChoice}.`;
        container.appendChild(content);
    }
    else if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "rock")) {
        content.textContent = `You win! Your choice of ${playerChoice} beats the computers choice of ${computerChoice}.`;
        container.appendChild(content);
        playerScore++;
        play.textContent = "Player: "+playerScore;
        scores.appendChild(play);
    }
    else {
        content.textContent = `You lose! The computers choice of ${computerChoice} beats your choice of ${playerChoice}.`;
        container.appendChild(content);
        computerScore++;
        comp.textContent = "Computer: "+computerScore;
        scores.appendChild(comp);
    }
    if (computerScore === 5 ) {
        content.style.backgroundColor = "red";
        content.textContent = `Game over. You lost! Your final score: ${playerScore}. The computer's final score: ${computerScore}.`
    } else if (playerScore === 5) {
        content.style.backgroundColor = "Blue";
        content.style.color = "white";
        content.textContent = `Game over. You won! Your final score: ${playerScore}. The computer's final score: ${computerScore}.`
    }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', function () {
    console.log(playRound("rock"));
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
    console.log(playRound("paper"));
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {
    console.log(playRound("scissors"));
});



