//VARIABLES
  //Buttons
let button0 = document.getElementById("button0");

//TEXTS
let playerRollText= document.getElementById("playerRollText");

//DATA
let playerRoll=0;

//PROCESSES
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
});

//CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

//VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = playerRoll;
}
