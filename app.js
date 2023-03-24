//scores
let aScore = 0; //used to update alienScore
let hScore = 0; //used to update humanScore
let alienChoice;
let humanChoice;
let alienScore = document.querySelector(".alien span");
let humanScore = document.querySelector(".human span");
const buttons = document.querySelectorAll(".rps-buttons button");
const humanHand = document.querySelector(".humanHand");
const alienHand = document.querySelector(".alienHand");
const hands = [humanHand, alienHand];

//helper functions
//hand goes up and down 3 times
const rpsAnimation = () => {
  hands.forEach((hand) => {
    hand.classList.add("moveHand");
    hand.addEventListener("animationend", () => {
      hand.classList.remove("moveHand");
    });
  });
};

const resetChoices = () => {
  //after
  humanHand.src = "./images/human-rock.png";
  alienHand.src = "./images/alien-rock.png";
};
const showChoices = () => {
  //first change image based on choice
  if (humanChoice === "Rock") {
    humanHand.src = "./images/human-rock.png";
  } else if (humanChoice === "Paper") {
    humanHand.src = "./images/human-paper.png";
  } else {
    humanHand.src = "./images/human-scissors.png";
  }
  //then change alien image based on random choice
  if (alienChoice === "Rock") {
    alienHand.src = "./images/alien-rock.png";
  } else if (alienChoice === "Paper") {
    alienHand.src = "./images/alien-paper.png";
  } else {
    alienHand.src = "./images/alien-scissors.png";
  }
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
//play animation 2.5 secs before changing image
const playRound = () => {
  resetChoices();
  rpsAnimation();
  setTimeout(() => {
    showChoices();
  }, 2500);
  chooseWinner();
};

//to prevent spamming buttons
const disableButtons = () => {
  buttons.forEach((button) => {
    button.disabled = true;
  });
};
const enableButtons = () => {
  buttons.forEach((button) => {
    button.disabled = false;
  });
};

//listen to buttons for human choice
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    humanChoice = this.innerHTML;
    disableButtons();
    setTimeout(() => {
      enableButtons();
    }, 3000);
    playRound();
  });
});
