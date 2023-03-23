//scores
let humanScore = document.querySelector(".human span");
let alienScore = document.querySelector(".alien span");
const buttons = document.querySelectorAll(".rps-buttons button");
let alienChoice;
let humanChoice;
alienScore = 0;
humanScore = 0;

//helper functions
const rpsAnimation = () => {
  // hand goes up and down 3 times
};

const rollAlienChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  alienChoice = choices[Math.floor(Math.random() * 3)];
  console.log("alien choice is", alienChoice);
  console.log("human choice is", humanChoice);
};

const compareHands = () => {
  if (alienChoice === humanChoice) {
    console.log("It's a tie");
    return;
  }
  if (humanChoice === "Rock") {
    if (alienChoice === "Paper") {
      console.log("Alien wins");
    } else {
      console.log("Human wins");
    }
    return;
  }
  if (humanChoice === "Paper") {
    if (alienChoice === "Scissors") {
      console.log("Alien wins");
    } else {
      console.log("Human wins");
    }
    return;
  }
  if (humanChoice === "Scissors") {
    if (alienChoice === "Rock") {
      console.log("Alien wins");
    } else {
      console.log("Human wins");
    }
    return;
  }
};

const chooseWinner = () => {
  rollAlienChoice();
  compareHands();
};
const playRound = () => {
  // hand = rock;
  rpsAnimation();
  chooseWinner();
  //hand = humanChoice
};

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    humanChoice = this.innerHTML;
    playRound();
  });
});
