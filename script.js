
const rock = 1;
const paper = 2;
const scissor = 3;

function computerPlay() {   //random number 1-3 assigned to computer
    let computerSelection = Math.floor(Math.random()*3)+1

    return computerSelection;
}

function roundMessage(string){
    const message = document.querySelector(".message");
    message.textContent = string;
    message.style.alignSelf = "center";
    message.style.fontWeight = "bold";
    message.style.fontSize = "1.5em";
    message.style.margin = "3vh 0 3vh 0";
}

function changeImage(playerSelection, computerSelection){ //shows image of what player and COM played

    const player = document.getElementById("player");
    const computer = document.getElementById("COM");

    if (playerSelection === 1) {
        player.src="img/Stone.jpeg"
    } else if (playerSelection === 2) {
        player.src="img/Paper.jpeg"
    } else if (playerSelection === 3) {
        player.src="img/Scissor.jpeg"
    }
    if (computerSelection === 1) {
        computer.src="img/Stone.jpeg"
    } else if (computerSelection === 2) {
        computer.src="img/Paper.jpeg"
    } else if (computerSelection === 3) {
        computer.src="img/Scissor.jpeg"
    }
}

function battle(playerSelection, computerSelection){   
    if (computerSelection === playerSelection) {
        roundMessage("Draw");
        battleResult = 0
    } else if (computerSelection === 1 && playerSelection === 2) {
        roundMessage("You win! Paper beats rock")
        battleResult = 1
    } else if (computerSelection === 2 && playerSelection === 1) {
        roundMessage("You lose! Paper beats rock")
        battleResult = -1 
    } else if (computerSelection === 1 && playerSelection === 3) {
        roundMessage("You lose! Rock beats Scissors")
        battleResult = -1 
    } else if (computerSelection === 3 && playerSelection === 1) {
        roundMessage("You win! Rock beats Scissors") 
        battleResult = 1
    } else if (computerSelection === 2 && playerSelection === 3) {
        roundMessage("You win! Scissors beats paper") 
        battleResult = 1
    } else if (computerSelection === 3 && playerSelection === 2) {
        roundMessage("You lose! Scissors beats paper") 
        battleResult = -1
    }

    changeImage(playerSelection, computerSelection);
    
    return battleResult;
}

let playerWins = 0;
let comWins = 0;

function changeResult(winner){  //changes Result on webpage
    let playerResult = document.querySelector(".playerResult");
    let comResult = document.querySelector(".comResult");

    if (winner == 1){
        playerWins = playerWins + 1;
        playerResult.innerHTML = playerWins;
    } else if (winner == -1){
        comWins = comWins + 1;
        comResult.innerHTML = comWins;
    }
}

document.getElementById("paper").addEventListener("click", (e) => {game(paper)});
document.getElementById("rock").addEventListener("click", (e) => {game(rock)});
document.getElementById("scissor").addEventListener("click", (e) => {game(scissor)});

let round = 0;

function game(playerSelection) {
    round++;
    if (round < 5){
    let computerSelection = computerPlay();
    let battleResult = battle(playerSelection,computerSelection);
    changeResult(battleResult);
    } else if (round == 5){
        let computerSelection = computerPlay();
        let battleResult = battle(playerSelection,computerSelection);
        changeResult(battleResult);
        if(comWins == playerWins){
            alert("Game ended on a Draw! Try again?");
        } else if (comWins < playerWins) {
            alert("You won the Game! Play again?");
        } else {
            alert("You lost the Game! Try again?");
        }
    }
    
    console.log(round);
}
