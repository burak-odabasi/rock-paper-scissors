//scores
let humanScore = document.querySelector(".human span");
let alienScore = document.querySelector(".alien span");
alienScore = 0;
humanScore = 0;
let roundWinner;

//buttons
const buttons = document.querySelector(".rps-buttons button");

//helper functions
const rpsAnimation = () => {
  // hand goes up and down 3 times
};
const rollAlienChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  alienChoice = choices[Math.floor(Math.random()) * 3];
  console.log(alienChoice);
};
const chooseWinner = () => {
  if (roundWinner === "human") {
    ++humanScore.textContent;
  } else {
    ++alienScore.textContent;
  }
};

const playRound = (e) => {
  // roundWinner;
  // hand = rock;
  // humanChoice = e.name;
  // rollAlienChoice();
  // rpsAnimation();
  // chooseWinner();
  // hand = humanChoice;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e);
  });
});

rollAlienChoice();
