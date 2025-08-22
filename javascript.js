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