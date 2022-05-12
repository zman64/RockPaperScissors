let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let buttons = document.getElementsByClassName('btn-lg');
let display = document.createElement('div');
display.classList.add('h1','text-white');
const body = document.querySelector('body');
//const roundResult = document.querySelector('#roundResult');
const runningScore = document.querySelector('#runningScore')
const container = document.getElementById('container')

Array.from(buttons).forEach( button => {
    button.addEventListener('click', () => {
        playerSelection = button.value;
        playRound(playerSelection, computerSelection);

        if (playerScore === 5 || computerScore === 5){
            declareWinner();
        }
    })
})

//return random choice of rock paper scissors
function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoiceIndex = Math.floor(Math.random() * 3)
    return choices[randomChoiceIndex];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    let runningScore = document.createElement('div');
    
   if (computerSelection == playerSelection){
       displayResults("Tie game!");
   } else if (
       (computerSelection == 'rock' && playerSelection == 'scissors') ||
       (computerSelection == 'scissors' && playerSelection == 'paper') ||
       (computerSelection == 'paper' && playerSelection == 'rock')
   ) {
       computerScore++;
       keepCpuScore();
       if (computerScore === 1){
           displayResults(`Oh no! try again ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
       } else if (computerScore === 2){
           displayResults(
               `You lost again! Oh no!! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.
               You got this! `)
       } else if (computerScore === 3){
           displayResults(
               `3rd time you lose! Keep trying! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
           )
       } else if (computerScore === 4){
           displayResults(
               `Oh no this is it! Computer almost wins!
               ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}. Please win`
           )
       } else {
           displayResults(`${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
       }
   } else {
       playerScore++;
       keepPlayerScore();
       if (playerScore === 1){
           displayResults(
               `Lets go!! You Won!!. ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
           )
       } else if (playerScore === 2){
           displayResults(
               `Keep it up! Second win. ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
           )
       } else if (playerScore === 3){
           displayResults (
               `Third time winning! look at you go! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
           )
       } else if (playerScore === 4){
           displayResults(
               `One more and you win!! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`)
       } else {
           displayResults(`${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`)
       }
   }

    //display.classList.add('lead','text-white','mt-3','row','ms-1')
    //roundResult.appendChild(display);
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayResults(str){
    
    display.animate([{opacity: 0}, {opacity: 1}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out"
    });
    display.textContent = str
    
    container.appendChild(display)
}

function keepPlayerScore(){
    let playerScoreBox = document.querySelector("#player-score")
    playerScoreBox.animate([{ opacity: 0}, { opacity: 1 }], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out"
    })
    playerScoreBox.textContent = playerScore;
}

function keepCpuScore() {
    let computerScoreBox = document.querySelector('#computer-score');

    computerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out"
    })
    computerScoreBox.textContent = computerScore;
}

function declareWinner() {
    Array.from(buttons).forEach( button => {
        button.disabled = true;
    })
    display.animate([{opacity: 0}, {opacity: 1}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out"
    });
    if (playerScore > computerScore){
        display.textContent = "You Won!! Thanks for playing! want to play again?"
    } else {
        display.textContent = "You lose!!... Maybe another day... Play again?"
    }
    const PlayAgain = document.createElement('button')
    PlayAgain.classList.add('btn-md', 'btn-success', 'align-self-center');
    PlayAgain.textContent = 'Play Again?'
    container.appendChild(display);
    container.appendChild(PlayAgain);
    PlayAgain.addEventListener('click', () => {
        display.textContent = '';
        playerScore = 0;
        computerScore = 0;
        keepPlayerScore();
        keepCpuScore();
        Array.from(buttons).forEach( button => {
            button.disabled = false;
        })
        PlayAgain.classList.add('hide')
    })

    
}
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