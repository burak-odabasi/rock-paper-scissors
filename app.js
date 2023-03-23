let humanScore = document.querySelector(".human span");
let alienScore = document.querySelector(".alien span");
alienScore = 0;
humanScore.innerHTML = 0;
let roundWinner;
const rockButton = document.querySelector(".rps-buttons:nth-child(1)");
const paperButton = document.querySelector(".rps-buttons:nth-child(2)");
const scissorsButton = document.querySelector(".rps-buttons:nth-child(3)");
const buttonsArray = [rockButton, paperButton, scissorsButton];

const rpsAnimation = () => {
  // hand goes up and down 3 times
};
const alienChoice = () => {
  // random alien choice from R P or S
};
const determineWinner = () => {
  // compare humanchoice and alien choice
};

buttonsArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    // hand = rock;
    // humanChoice = e.name;
    // AlienChoice();
    // rpsAnimation();
    // determineWinner();
    // hand = humanChoice;
  });
});

const givePoint = () => {
  if (roundWinner === "human") {
    ++humanScore.textContent;
  } else {
    ++alienScore.textContent;
  }
};

const rockPaperScissors = () => {
  roundWinner;
  givePoint();
};
