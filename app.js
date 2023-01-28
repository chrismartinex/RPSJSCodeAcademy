//The Famous Rock, Paper , or Scissors game. The objective of this game is, to choose either rock, paper, or scissors. The items will be compared, and whichever player chooses the more powerful item wins.

//Const arrow function
/*The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts*/

const getUserChoice = (userInput) => {
  //User can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations
  userInput = userInput.toLowerCase();
  //writing an if / else statement   //Code below makes sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};
//consoles below to test the program
// console.log(getUserChoice('PAPER'));
// console.log(getUserChoice('spoon'));

//function for computers choice
const getComputerChoice = () => {
  let randomNumber = Math.random(Math.floor() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 3:
      return "scissors";
  }
};
//calling the function on the console, making sure it works
// console.log(getComputerChoice());
// console.log(getComputerChoice());

//creating function below that determines winner

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Game is tie!";
  }
  if (userChoice === "rock") {
    if (userChoice === "paper") {
      return "User Won";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors" || "rock") {
      return "User Won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock" || "paper") {
      return "User Won!";
    }
  }
};
//testing function below
// console.log(determineWinner('paper','scissors'));

//function to start the game
function playGame() {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice("scissors");
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice)); //Determines winner
}
console.log(playGame());
