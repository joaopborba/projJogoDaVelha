const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const play = document.getElementById('play');
const playerTurn = document.getElementById('playerTurn');


play.addEventListener('click', function(){
    playerTurn.innerText = player1.value;
})


