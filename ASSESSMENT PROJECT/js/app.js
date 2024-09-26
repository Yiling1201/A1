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
let result = 0;

// PROCESSES
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
  showAIRollResult();
  evaluateGameResult();
  updateScores();
  saveAsCookie();
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



function saveAsCookie() {
  document.cookie = "playerScore=" + playerScore + ";expires=Thu, 29 Dec 2030 12:00:00 UTC";
  document.cookie = "AIScore=" + aiScore + ";expires=Thu, 29 Dec 2030 12:00:00 UTC";
}

function LoadGame() {
  //game loaded from 2 cookies
  playerScore = getCookie("playerScore");
  aiScore = getCookie("AIScore");
  //showscore();
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

window.onload = function() {
  LoadGame();
  updateScores();
};


let button1 = document.getElementById("button1");

button1.addEventListener("click", function() {
  resetGame();
});

// Reset the game
function resetGame() {
  playerRoll = 0;
  aiRoll = 0;
  playerRollText.innerHTML = "Player rolled: 0";
  aiRollText.innerHTML = "AI rolled: 0";
  resultText.innerHTML = "Result: ";

  playerScore = 0;
  aiScore = 0;
  playerScoreText.innerHTML = "Player Score: 0";
  aiScoreText.innerHTML = "AI Score: 0";

  saveAsCookie();
}

window.onload = function() {
  LoadGame();
  updateScores();
};
