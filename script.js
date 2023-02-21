// Globle Variables
let playerScore = 0;
let computerScore = 0;
let roundNum = 1;
let playerChoice;
let computerChoice;
let result;

// get Elements by it's Id
const rock = document.getElementById('rock');
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rockDiv = document.getElementById('rockDiv');
const paperDiv = document.getElementById('paperDiv');
const scissorsDiv = document.getElementById('scissorsDiv');
const round = document.getElementById('rounds');
const winning = document.getElementById('winning');
const scoreComputer = document.getElementById('computerScore');
const scorePlayer = document.getElementById('playerScore');
const reset = document.getElementById('para');
const playerRound1 = document.getElementById('playerRound1');
const playerRound2 = document.getElementById('playerRound2');
const playerRound3 = document.getElementById('playerRound3');
const playerRound4 = document.getElementById('playerRound4');
const playerRound5 = document.getElementById('playerRound5');
const computerRound1 = document.getElementById('computerRound1');
const computerRound2 = document.getElementById('computerRound2');
const computerRound3 = document.getElementById('computerRound3');
const computerRound4 = document.getElementById('computerRound4');
const computerRound5 = document.getElementById('computerRound5');
const resultRound1 = document.getElementById('resultRound1');
const resultRound2 = document.getElementById('resultRound2');
const resultRound3 = document.getElementById('resultRound3');
const resultRound4 = document.getElementById('resultRound4');
const resultRound5 = document.getElementById('resultRound5');

// Computer Choose Rock Paper Or Scissors
function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

// main function to run entire app
function main() {
    // Display are not showing in Round and Winning Section
    round.style.display = 'none';
    winning.style.display = 'none';
    reset.style.display = 'none';

    // Add Event Listener to all buttons
    rock.addEventListener("click", () => {
        playerChoice = 'Rock';
        computerChoice = getComputerChoice();
        gamePlay(playerChoice, computerChoice);
        rock.style.opacity = '0.5';
        setTimeout(() => {
            rock.style.opacity = '1';
        }, 500);
    });

    paper.addEventListener("click", () => {
        playerChoice = 'Paper';
        computerChoice = getComputerChoice();
        gamePlay(playerChoice, computerChoice);
        paper.style.opacity = '0.5';
        setTimeout(() => {
            paper.style.opacity = '1';
        }, 500);
    });

    scissors.addEventListener("click", () => {
        playerChoice = 'Scissors';
        computerChoice = getComputerChoice();
        gamePlay(playerChoice, computerChoice);
        scissors.style.opacity = '0.5';
        setTimeout(() => {
            scissors.style.opacity = '1';
        }, 500);
    });
}

function computerHighlight () {
    if (computerChoice === 'Rock') {
        rockDiv.style.opacity = '0.5';
        setTimeout(() => {
            rockDiv.style.opacity = '1';
        }, 500);
    }
    else if (computerChoice === 'Paper') {
        paperDiv.style.opacity = '0.5';
        setTimeout(() => {
            paperDiv.style.opacity = '1';
        }, 500);
    }
    else if (computerChoice === 'Scissors') {
        scissorsDiv.style.opacity = '0.5';
        setTimeout(() => {
            scissorsDiv.style.opacity = '1';
        }, 500);
    }
}

function gamePlay (player, computer) {
    
    // Run 5 rounds to play game
    if (roundNum > 5) {
        return
    }
    else {

        // Show the display of rounds
        round.style.display = 'block';
        round.innerHTML = `Round ${roundNum}`
        computerHighlight();

        // Decided the resut who win
        if (player === computer) {
            result = "It's Draw";
        }
        else if (player === 'Rock' && computer === 'Scissors') {
            result = "Yehh! You win";
            playerScore ++;
            scorePlayer.innerHTML = `Player's Score :- ${playerScore}`;
            
        }
        else if (player === 'Paper' && computer === 'Rock') {
            result = "Yehh! You win";
            playerScore ++;
            scorePlayer.innerHTML = `Player's Score :- ${playerScore}`;
        }
        else if (player === 'Scissors' && computer === 'Paper') {
            result = "Yehh! You win";
            playerScore ++;
            scorePlayer.innerHTML = `Computer's Score :- ${playerScore}`;
        }
        else {
            result = "Opps! You lose";
            computerScore ++;
            scoreComputer.innerHTML = `Player's Score :- ${computerScore}`;
        }
        checkRound();
        updateTable();
        roundNum++;
    }
}

function checkRound () {
    if (roundNum >= 5) {
        gameOver();
    }
    else {
        return;
    }
}

function gameOver() {

    // Show the display of results
    reset.style.display = 'block';
    if (playerScore > computerScore) {
        winning.style.display = 'block';
    }
    else if (computerScore > playerScore) {
        winning.innerHTML = `Opps! You lose the game`
        winning.style.display = 'block';
    }
    else {
        winning.innerHTML = `Ahh! It's Tai`
        winning.style.display = 'block';
    }
}

function updateTable() {

    // Update the whole table during playing game
    switch (roundNum) {
        case 1:
            playerRound1.innerHTML = `${playerChoice}`;
            computerRound1.innerHTML = `${computerChoice}`;
            resultRound1.innerHTML = `${result}`;
            break;
        case 2:
            playerRound2.innerHTML = `${playerChoice}`;
            computerRound2.innerHTML = `${computerChoice}`;
            resultRound2.innerHTML = `${result}`;
            break;
        case 3:
            playerRound3.innerHTML = `${playerChoice}`;
            computerRound3.innerHTML = `${computerChoice}`;
            resultRound3.innerHTML = `${result}`;
            break;
        case 4:
            playerRound4.innerHTML = `${playerChoice}`;
            computerRound4.innerHTML = `${computerChoice}`;
            resultRound4.innerHTML = `${result}`;
            break;
        case 5:
            playerRound5.innerHTML = `${playerChoice}`;
            computerRound5.innerHTML = `${computerChoice}`;
            resultRound5.innerHTML = `${result}`;
            break;
    }
}

main();