import './style.css';

let yourPoints = 0;
let cpPoints = 0;

const roundMsg1 = document.getElementById("roundMessage1");
const roundMsg2 = document.getElementById("roundMessage2");

const playerSign = document.getElementById("playerSign");
const cpSign = document.getElementById("cpSign");

const yourScoreMsg = document.getElementById("playerScoreMsg");
const cpScoreMsg = document.getElementById("cpScoreMsg");

const buttons = document.querySelectorAll(".btn-choice");

const modal = document.querySelector(".modal");
const exit = document.querySelector(".exit");
const finalMsg = document.getElementById("modalMsg");

const getCPSelection = () => {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return '✊';
    case 1:
      return '✋';
    case 2:
      return '✌️';
  }
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    roundMsg1.innerText = 'Its a tie!';
    roundMsg2.innerText = `${playerSelection} and ${computerSelection} are the same`;
  }

  if (playerSelection === '✊' && computerSelection === '✌️' || playerSelection === '✋' && computerSelection === '✊' || playerSelection === '✌️' && computerSelection === '✋') {
    yourPoints++;
    yourScoreMsg.innerText = `Player: ${yourPoints}`;
    roundMsg1.innerText = 'You win';
    roundMsg2.innerText = `${playerSelection} beats ${computerSelection}`;
  }

  if (playerSelection === '✊' && computerSelection === '✋' || playerSelection === '✋' && computerSelection === '✌️' || playerSelection === '✌️' && computerSelection === '✊') {
    cpPoints++;
    cpScoreMsg.innerText = `CP: ${cpPoints}`;
    roundMsg1.innerText = 'You lose';
    roundMsg2.innerText = `${computerSelection} beats ${playerSelection}`;
  }
}

const toggleModal = () => {
  modal.classList.toggle("show-modal");
}

const windowOnClick = (event) => {
  if (event.target === modal) {
    toggleModal();
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let yourHand = button.innerText;
    let cpHand = getCPSelection();

    playerSign.innerText = yourHand;
    cpSign.innerText = cpHand;

    playRound(yourHand, cpHand);

    if (yourPoints === 5) {
      finalMsg.innerText = "YOU WON!";
      toggleModal();
    }

    if (cpPoints === 5) {
      finalMsg.innerText = "YOU LOSE";
      toggleModal();
    }
  });
});

exit.addEventListener('click', () => {
  toggleModal();
  document.location.reload();
});

window.addEventListener("click", windowOnClick);
