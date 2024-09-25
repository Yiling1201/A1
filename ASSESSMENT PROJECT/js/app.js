// VARIABLES
// Buttons
let button0 = document.getElementById("button0");

// TEXTS
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let resultText = document.getElementById("result");
let playerScoreText = document.getElementById("playerScoreText");
let aiScoreText = document.getElementById("aiScoreText");

// DATA
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;

// PROCESSES
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
  showAIRollResult();
  evaluateGameResult();
  updateScores();
});

// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
  aiRoll = Math.floor(Math.random() * 6) + 1;
}

// Function to evaluate the result (win, lose, or draw)
function evaluateGameResult() {
  if (playerRoll > aiRoll) {
    resultText.innerHTML = "Result: Win!";
    playerScore++;
  } else if (playerRoll < aiRoll) {
    resultText.innerHTML = "Result: Lose!";
    aiScore++;
  } else {
    resultText.innerHTML = "Result: Draw!";
  }
}

// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = `Player rolled: ${playerRoll}`;
}

function showAIRollResult() {
  aiRollText.innerHTML = `AI rolled: ${aiRoll}`;
}

function updateScores() {
  playerScoreText.innerHTML = `Player Score: ${playerScore}`;
  aiScoreText.innerHTML = `AI Score: ${aiScore}`;
}
