import './style.css';

let yourPoints = 0;
let cpPoints = 0;

const roundMsg1 = document.getElementById("roundMessage1");
const roundMsg2 = document.getElementById("roundMessage2");

const playerSign = document.getElementById("playerSign");
const cpSign = document.getElementById("cpSign");

const yourScoreMsg = document.getElementById("yourScoreMsg");
const cpScoreMsg = document.getElementById("cpScoreMsg");

const buttons = document.querySelectorAll(".btn-choice");

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
    roundMsg1.textContent = 'Its a tie!';
    roundMsg2.textContent = `${playerSelection} and ${computerSelection} are the same`;
  }

  if (playerSelection === '✊' && computerSelection === '✌️' || playerSelection === '✋' && computerSelection === '✊' || playerSelection === '✌️' && computerSelection === '✋') {
    yourPoints++;
    yourScoreMsg.textContent = `Player: ${yourPoints}`;
    roundMsg1.textContent = 'You win';
    roundMsg2.textContent = `${playerSelection} beats ${computerSelection}`;
  }

  if (playerSelection === '✊' && computerSelection === '✋' || playerSelection === '✋' && computerSelection === '✌️' || playerSelection === '✌️' && computerSelection === '✊') {
    cpPoints++;
    cpScoreMsg.textContent = `CP: ${cpPoints}`;
    roundMsg1.textContent = 'You lose';
    roundMsg2.textContent = `${computerSelection} beats ${playerSelection}`;
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let yourHand = button.textContent;
    let cpHand = getCPSelection();

    playerSign.textContent = yourHand;
    cpSign.textContent = cpHand;

    playRound(yourHand, cpHand);
  });
});
