function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function getPlayerChoice () {
    return prompt("Choose between Rock, Paper, Scissors");
}

let computerWin = 0;
let playerWin = 0;

function playRound(getPlayerChoice, getComputerChoice) {
    if (getComputerChoice === getPlayerChoice) {
        console.log(`Player Score :- ${playerWin} and Computer Score :- ${computerWin}`);
        alert("It's Draw");
    }
    else if (getComputerChoice === 'Rock' && getPlayerChoice === 'Scissors') {
        computerWin ++;
        console.log(`Player Score :- ${playerWin} and Computer Score :- ${computerWin}`);
        alert("Opps! You lose, Computer win");
    }
    else if (getComputerChoice === 'Paper' && getPlayerChoice === 'Rock') {
        computerWin ++;
        console.log(`Player Score :- ${playerWin} and Computer Score :- ${computerWin}`);
        alert("Opps! You lose, Computer win");
    }
    else if (getComputerChoice === 'Scissors' && getPlayerChoice === 'Paper') {
        computerWin ++;
        console.log(`Player Score :- ${playerWin} and Computer Score :- ${computerWin}`);
        alert("Opps! You lose, Computer win");
    }
    else {
        playerWin ++;
        console.log(`Player Score :- ${playerWin} and Computer Score :- ${computerWin}`);
        alert("Opps! You win, Computer lose");
    }
}

for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
}

if (computerWin == playerWin) {
    console.log("It's Tai");
}
else if (computerWin < playerWin) {
    console.log("Player Win");
}
else {
    console.log("COmputer win");
}

console.log("Final Player Score is :- ", playerWin);
console.log("Final Computer Score is :- ", computerWin);
