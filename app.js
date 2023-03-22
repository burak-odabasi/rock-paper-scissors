let humanScore = document.querySelector(".human span");
let alienScore = document.querySelector(".alien span");
humanScore.innerHTML = 0;
alienScore = 0;

const givePoint = () => {
  if (roundWinner === "human") {
    ++humanScore.textContent;
  } else {
    ++alienScore.textContent;
  }
};

givePoint();
