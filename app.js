let Userscore = 0;
let Compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScr = document.querySelector("#user-score");
const compScr = document.querySelector("#comp-score");
const max = 5;

const genComp = () => {
  const options = ["rock", "paper", "scissor"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};
const drawgame = () => {
  console.log("Draw Game");
  msg.innerText = "Game Draw , Play Again ;)";
  msg.style.backgroundColor = "#0c0f2f";
};
const reset = () => {
  Userscore = 0;
  Compscore = 0;
  userScr.innerText = Userscore;
  compScr.innerText = Compscore;
};

const checkWinner = () => {
  if (Userscore === max) {
    msg.innerText = "Congratulations! You win the match!";
    msg.style.backgroundColor = "green";
    reset();
    
    
  } else if (Compscore === max) {
    msg.innerText = "Sorry, you lose the match!";
    msg.style.backgroundColor = "red";
    reset();
    
  }
};

const ShowWinner = (userWin, userChoice, compchoice) => {
  if (userWin) {
    Userscore++;
    userScr.innerText = Userscore;
    // console.log(`You Win!${userChoice}Beats${compchoice}`);
    msg.innerText = `You Win ${userChoice} Beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    Compscore++;
    compScr.innerText = Compscore;
    console.log("You Lose :(");
    msg.innerText = `You Lose ${compchoice} Beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
  checkWinner();
};
const playgame = (userChoice) => {
  console.log("User Chose", userChoice);
  const compchoice = genComp();
  console.log("Computer Chose", compchoice);
  if (userChoice === compchoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compchoice === "scissor" ? false : true;
    } else {
      userWin = compchoice === "rock" ? false : true;
    }
    ShowWinner(userWin, userChoice, compchoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
