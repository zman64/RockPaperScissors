
//return random choice of rock paper scissors
function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoiceIndex = Math.floor(Math.random() * 3)
    return choices[randomChoiceIndex];
}

//return a number based on who wins
function singleRound(playerSelection, computerSelection){
    // make player choice input case-insensitive
    let playerSelection1 = playerSelection.toLowerCase();
     while(playerSelection1 !== 'rock' && playerSelection1 !== 'scissors' && playerSelection1 !== 'paper'){
        
        playerSelection1 = prompt("Not Valid Choice and please try again");
        playerSelection1 = playerSelection1.toLowerCase();
    }

    console.log(`Your Selection: ${playerSelection1} \nComputer Selection: ${computerSelection}`)
    
    if(playerSelection1 === "rock" && computerSelection === "Paper"){
        console.log("You Lose! Paper beats Rock")
        return 2;
    } else if (playerSelection1 === "rock" && computerSelection === "Scissors"){
        console.log("You Win! Rock beats Scissors")
        return 1;
    } else if (playerSelection1 === "paper" && computerSelection === "Rock"){
        console.log("You Win! Paper beats Rock")
        return 1;
    } else if (playerSelection1 === "paper" && computerSelection === "Scissors") {
        
        console.log("You Lose! Scissors beats Paper")
        return 2
    } else if (playerSelection1 === "scissors" && computerSelection === "Rock"){
        
        console.log("You Lose! Rock beats Scissors")
        return 2
    } else if (playerSelection1 === "scissors" && computerSelection === "Paper"){
        "You Win! Scissors beats Paper"
        return 1
    }  else {
        console.log("It's a tie!")
        return 3
    }
}

// main game function
function game(){
    var computerScore = 0;
    var playerScore = 0;
    let outcomeResults = "";
    // for each round of game (best of 5 games)
    for(let i =0; i < 5; i++){
        // prompt user for choice
        let playerSelection = prompt("Let's Play! Choose Rock, Paper, or Scissors")

        // create computer choice
        let computerSelection = computerPlay();

        // handle a single Round and return who won
        let answer = singleRound(playerSelection, computerSelection, computerScore, playerScore);

        // increment score based on who won
        if (answer === 1){
            playerScore++;
        } else if(answer === 2){
            computerScore++;
        } else {

        }
    }
    // log who wins best out of 5 games
    if(playerScore > computerScore){
        console.log("You Win best out of 5! Congrats")
    } else if (playerScore === computerScore){
        console.log("It's a tie game!!")
    } else {
        console.log("You Lose the entire Game!!")
    }
}

// const sumArray = function(array) {
//     let sum = 0;
//     array.forEach(function(number){
//         sum += number;
//     });
//     return sum;
// }
// sumArray([2,2,2])

// start game function
game();

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(singleRound(playerSelection, computerSelection))