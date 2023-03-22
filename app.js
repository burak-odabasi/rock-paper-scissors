let humanScore = document.querySelector(".human span");
let alienScore = document.querySelector(".alien span");
let roundWinner;
humanScore.innerHTML = 0;
alienScore = 0;

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
