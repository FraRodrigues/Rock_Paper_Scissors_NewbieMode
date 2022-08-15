
/*console.log("Game started: Round 1");

console.log("Rock, Paper or Scissor?");

function computerPlay() {
    let computerSelection = Math.floor(Math.random()*3)+1

    return computerSelection;
}

function playerPlay() {
    let playerSelection = prompt("Choose Rock, Paper or Scissor")
    playerSelection = playerSelection.toLowerCase()
    //console.log(playerSelection)
    if (playerSelection === "rock") {
        playerSelection = 1
    } else if (playerSelection === "paper") {
        playerSelection = 2
    } else if (playerSelection === "scissor") {
        playerSelection = 3
    } else {
        prompt("Error!!! Choose Rock, Paper or Scissor")
    }

    //console.log(playerSelection)

    return playerSelection;
}

function battle(playerSelection, computerSelection){
    if (computerSelection === playerSelection) {
        console.log("Draw")
        playerWin = 0
    } else if (computerSelection === 1 && playerSelection === 2) {
        console.log ("You win! Paper beats rock")
        playerWin = 1
    } else if (computerSelection === 2 && playerSelection === 1) {
        console.log ("You lose! Paper beats rock")
        playerWin = -1 
    } else if (computerSelection === 1 && playerSelection === 3) {
        console.log ("You lose! Rock beats Scissors")
        playerWin = -1 
    } else if (computerSelection === 3 && playerSelection === 1) {
        console.log ("You win! Rock beats Scissors") 
        playerWin = 1
    } else if (computerSelection === 2 && playerSelection === 3) {
        console.log ("You win! Scissors beats paper") 
        playerWin = 1
    } else if (computerSelection === 3 && playerSelection === 2) {
        console.log ("You lose! Scissors beats paper") 
        playerWin = -1
    }

    return playerWin;
}

function game() {
    wins = 0
    for (let i = 0; i < 5; i++) {
    let playerSelection = playerPlay()
    let computerSelection = computerPlay()
    let playerWin = battle(playerSelection,computerSelection)
    wins = wins + playerWin
    }

    if (wins < 0) {
        console.log("You lost the game after the five rounds")
    } else if (wins = 0) {
        console.log("The game ended in a draw! Try again!")
    } else if (wins > 0) {
        console.log("You won the game after the five rounds")
    }
} */


const rock = 1;
const paper = 2;
const scissor = 3;

function computerPlay() {
    let computerSelection = Math.floor(Math.random()*3)+1

    
    return computerSelection;
}

function battle(playerSelection, computerSelection){
    if (computerSelection === playerSelection) {
        console.log("Draw")
        playerWin = 0
    } else if (computerSelection === 1 && playerSelection === 2) {
        console.log ("You win! Paper beats rock")
        playerWin = 1
    } else if (computerSelection === 2 && playerSelection === 1) {
        console.log ("You lose! Paper beats rock")
        playerWin = -1 
    } else if (computerSelection === 1 && playerSelection === 3) {
        console.log ("You lose! Rock beats Scissors")
        playerWin = -1 
    } else if (computerSelection === 3 && playerSelection === 1) {
        console.log ("You win! Rock beats Scissors") 
        playerWin = 1
    } else if (computerSelection === 2 && playerSelection === 3) {
        console.log ("You win! Scissors beats paper") 
        playerWin = 1
    } else if (computerSelection === 3 && playerSelection === 2) {
        console.log ("You lose! Scissors beats paper") 
        playerWin = -1
    }

    
    return playerWin;
}

document.getElementById("paper").addEventListener("click", (e) => {game(paper)});
document.getElementById("rock").addEventListener("click", (e) => {game(rock)});
document.getElementById("scissor").addEventListener("click", (e) => {game(scissor)});

function game(playerSelection) {
    let computerSelection = computerPlay()
    let playerWin = battle(playerSelection,computerSelection)
    }