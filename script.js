let userScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let totalUserWins = 0;
let totalComputerWins = 0;

function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let outcome, winnerSide;

  if (userChoice === computerChoice) {
    outcome = "It's a draw!";
    winnerSide = null;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    outcome = "YOU WIN AGAINST PC";
    winnerSide = "user";
    userScore++;
    totalUserWins++;
  } else {
    outcome = "YOU LOST AGAINST PC";
    winnerSide = "computer";
    computerScore++;
    totalComputerWins++;
  }

  gamesPlayed++;

  // Update UI
  document.getElementById('game-container').style.display = 'none';
  const resultContainer = document.getElementById('result-container');
  resultContainer.style.display = 'block';

  const userSymbol = document.getElementById('user-symbol');
  const computerSymbol = document.getElementById('computer-symbol');
  const winnerName = document.getElementById('winner-name');

  userSymbol.textContent = getSymbol(userChoice);
  computerSymbol.textContent = getSymbol(computerChoice);

  if (winnerSide === "user") {
    userSymbol.classList.add('winner');
    computerSymbol.classList.remove('winner');
  } else if (winnerSide === "computer") {
    computerSymbol.classList.add('winner');
    userSymbol.classList.remove('winner');
  }

  winnerName.textContent = outcome;

  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('games-played').textContent = gamesPlayed;
  document.getElementById('total-user-wins').textContent = totalUserWins;
  document.getElementById('total-computer-wins').textContent = totalComputerWins;

  if (gamesPlayed === 15) {
    declareFinalWinner();
  } else {
    document.getElementById('play-again').style.display = 'block';
  }
}

function getSymbol(choice) {
  switch (choice) {
    case 'rock': return '✊';
    case 'paper': return '✋';
    case 'scissors': return '✌️';
    default: return '';
  }
}

function playAgain() {
  document.getElementById('game-container').style.display = 'block';
  document.getElementById('result-container').style.display = 'none';
  document.getElementById('play-again').style.display = 'none';
}

function declareFinalWinner() {
  document.getElementById('result-container').style.display = 'none';
  const finalContainer = document.getElementById('final-result-container');
  finalContainer.style.display = 'block';

  const finalWinner = document.getElementById('final-winner');
  const trophyIcon = document.getElementById('trophy-icon');
  
  if (totalUserWins > totalComputerWins) {
    finalWinner.textContent = "HURRAY! YOU WON THE GAME";
    trophyIcon.style.display = 'block';
  } else if (totalUserWins < totalComputerWins) {
    finalWinner.textContent = "Computer is the Final Winner. Better luck next time!";
    trophyIcon.style.display = 'none';
  } else {
    finalWinner.textContent = "It's a Tie! Both are great!";
    trophyIcon.style.display = 'none';
  }
}

function restartGame() {
  userScore = 0;
  computerScore = 0;
  gamesPlayed = 0;
  totalUserWins = 0;
  totalComputerWins = 0;

  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('games-played').textContent = gamesPlayed;
  document.getElementById('total-user-wins').textContent = totalUserWins;
  document.getElementById('total-computer-wins').textContent = totalComputerWins;

  document.getElementById('final-result-container').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
}
document.addEventListener("DOMContentLoaded", () => {
  const showNamesBtn = document.getElementById("show-names-btn");
  const nameBox = document.getElementById("name-box");
  const closeBtn = document.getElementById("close-btn");

  showNamesBtn.addEventListener("click", () => {
    nameBox.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    nameBox.classList.add("hidden");
  });
});
