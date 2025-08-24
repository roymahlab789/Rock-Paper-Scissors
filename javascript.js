console.log("Hello World")
//crate a function
//the code needs to return in random rock paper scissors
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1 ) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice())
//ask the user with prompt
//save the answer in a variable
//return that variable
function getHumanChoice(){
let choice = prompt("Please type rock, paper or scissors:");
return choice;
}
console.log(getHumanChoice())

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log("You lose! Paper beats Rock"); // replace with full logic later
        // increment humanScore or computerScore depending on who wins
    }

    // loop for 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // final winner
    if (humanScore > computerScore) console.log("You won the game!");
    else if (computerScore > humanScore) console.log("Computer won the game!");
    else console.log("The game is a tie!");
}

// start the game
playGame();
