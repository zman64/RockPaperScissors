
//return random choice of rock paper scissors
function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoiceIndex = Math.floor(Math.random() * 3)
    return choices[randomChoiceIndex];
}
const container = document.getElementById('container')
//return a number based on who wins
function playRound(e){

    let playerSelection = e.target.value
    let computerSelection = computerPlay();
    let display = document.createElement('div');
    
    if(playerSelection === "Rock" && computerSelection === "Paper"){

        display.textContent = "You Lose! Paper beats Rock"

    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        display.textContent = "You Win! Rock beats Scissors"
       
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){

        display.textContent = "You Win! Paper beats Rock"

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {

        display.textContent = "You Lose! Scissors beats Paper"

    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){

        display.textContent = "You Lose! Rock beats Scissors"

    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){

        display.textContent = "You Win! Scissors beats Paper"

    }  else {
        display.textContent = "It's a tie!"
    }

    
    //let text = ${text} You chose ${playerSelection} and Computer chose `${computerSelection}.
    display.classList.add('h-1','text-white','mt-3')
    container.appendChild(display)
}



let buttons = document.getElementsByClassName('btn-lg')

Array.from(buttons).forEach(function(button){
    button.addEventListener('click', playRound)
})

// main game function
// function game(){
//     var computerScore = 0;
//     var playerScore = 0;
//     let outcomeResults = "";
//     // for each round of game (best of 5 games)
//     for(let i =0; i < 5; i++){
//         // prompt user for choice
//         let playerSelection = prompt("Let's Play! Choose Rock, Paper, or Scissors")

//         // create computer choice
//         let computerSelection = computerPlay();

//         // handle a single Round and return who won
//         let answer = singleRound(playerSelection, computerSelection, computerScore, playerScore);

//         // increment score based on who won
//         if (answer === 1){
//             playerScore++;
//         } else if(answer === 2){
//             computerScore++;
//         } else {

//         }
//     }
//     // log who wins best out of 5 games
//     if(playerScore > computerScore){
//         console.log("You Win best out of 5! Congrats")
//     } else if (playerScore === computerScore){
//         console.log("It's a tie game!!")
//     } else {
//         console.log("You Lose the entire Game!!")
//     }
// }

// const sumArray = function(array) {
//     let sum = 0;
//     array.forEach(function(number){
//         sum += number;
//     });
//     return sum;
// }
// sumArray([2,2,2])

// start game function
// game();

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(singleRound(playerSelection, computerSelection))