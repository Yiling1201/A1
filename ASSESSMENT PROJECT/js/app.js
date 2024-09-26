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

function saveAsCookie() {
  document.cookie = "playerScoreHistory=" +playerScore + ";expires=Thu, 29 Dec 2030 12:00:00UTC";
  document.cookie = "AIScoreHistory=" +aiScore + ";expires=Thu, 29 Dec 2030 12:00:00UTC";
  document.cookie = "evaluateResult=" +evaluateResult + ";expires=Thu, 29 Dec 2030 12:00:00UTC";
}


function LoadGame() {
  playerScore = getCookie("playerScore");
  aiScore = getCookie("aiScore");
  evaluateResult = getCookie("evaluateResult");
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
  return 0;
}

function saveAsCookie() {
  document.cookie = "playerScoreHistory=" + playerScore + ";expires=Thu, 29 Dec 2030 12:00:00 UTC";
  document.cookie = "AIScoreHistory=" + aiScore + ";expires=Thu, 29 Dec 2030 12:00:00 UTC";
  document.cookie = "evaluateResult=" + evaluateResult + ";expires=Thu, 29 Dec 2030 12:00:00 UTC";
}

function LoadGame() {
  playerScore = getCookie("playerScoreHistory") || 0; // Default to 0 if not found
  aiScore = getCookie("AIScoreHistory") || 0; // Default to 0 if not found
  evaluateResult = getCookie("evaluateResult") || ""; // Default to empty string if not found
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
  return ""; // Return an empty string if the cookie is not found
}

// Load game when the page loads
window.onload = function() {
  LoadGame();
  updateScores(); // Update displayed scores based on loaded values
};
