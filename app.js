const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const play = document.getElementById("play");
const board = document.getElementById("board");
let playerTurn = "";

function updatePlayer() {
  const playerInput = document.getElementById(playerTurn);
  document.getElementById("playerTurn").innerText = playerInput.value;
}

play.addEventListener("click", function () {
  playerInput.innerText = player1.value;
});
