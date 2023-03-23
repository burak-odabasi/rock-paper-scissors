//scores
let aScore = 0; //used to update alienScore
let hScore = 0; //used to update humanScore
let alienChoice;
let humanChoice;
let alienScore = document.querySelector(".alien span");
let humanScore = document.querySelector(".human span");
const buttons = document.querySelectorAll(".rps-buttons button");

//helper functions
const rpsAnimation = () => {
  //hand goes up and down 3 times
};

//get random alien choice
const rollAlienChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  alienChoice = choices[Math.floor(Math.random() * 3)];
  console.log("alien choice is", alienChoice);
  console.log("human choice is", humanChoice);
};

//compare alien and human choice
const compareHands = () => {
  if (alienChoice === humanChoice) {
    console.log("It's a tie");
    return;
  }
  if (humanChoice === "Rock") {
    if (alienChoice === "Paper") {
      console.log("Alien wins");
      alienScore.innerHTML = ++aScore;
    } else {
      console.log("Human wins");
      humanScore.innerHTML = ++hScore;
    }
    return;
  }
  if (humanChoice === "Paper") {
    if (alienChoice === "Scissors") {
      console.log("Alien wins");
      alienScore.innerHTML = ++aScore;
    } else {
      console.log("Human wins");
      humanScore.innerHTML = ++hScore;
    }
    return;
  }
  if (humanChoice === "Scissors") {
    if (alienChoice === "Rock") {
      console.log("Alien wins");
      alienScore.innerHTML = ++aScore;
    } else {
      console.log("Human wins");
      humanScore.innerHTML = ++hScore;
    }
    return;
  }
};

//get alien choice (human provided) and compare
const chooseWinner = () => {
  rollAlienChoice();
  compareHands();
};

//this func is called when human chooses an option
const playRound = () => {
  // hand = rock;
  rpsAnimation();
  chooseWinner();
  //hand = humanChoice
};

//listen to buttons for human choice
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    humanChoice = this.innerHTML;
    playRound();
  });
});
