function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoiceIndex = Math.floor(Math.random() * 3)
    return choices[randomChoiceIndex];
}

function singleRound(playerSelection, computerSelection){
    let playerSelection1 = playerSelection.toLowerCase();
    if(playerSelection1 === "rock" && computerSelection === "Paper"){
        return "You Lose! Paper beats Rock"
    } else if (playerSelection1 === "rock" && computerSelection === "Scissors"){
        return "You Win! Rock beats Scissors"
    } else if (playerSelection1 === "paper" && computerSelection === "Rock"){
        return "You Win! Paper beats Rock"
    } else if (playerSelection1 === "paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection1 === "scissors" && computerSelection === "Rock"){
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection1 === "scissors" && computerSelection === "Paper"){
        return "You Win! Scissors beats Paper"
    }  else {
        return "It's a tie!"
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(singleRound(playerSelection, computerSelection))