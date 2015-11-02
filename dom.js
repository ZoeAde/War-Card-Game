var shuffleBtn = document.getElementById("shuffle");
var playBtn = document.getElementById("play");
var playerOne = document.getElementById("player1");
var playerTwo = document.getElementById("player2");
var playerOneCard = document.getElementById("playerCard1");
var playerTwoCard = document.getElementById("playerCard2");

var roundWinner = document.getElementById("winnerAlert");
var playerOneScore = document.getElementById("score1");
var playerTwoScore = document.getElementById("score2");

var deck1 = [];
var deck2 = [];

var name = prompt("What is your name?");
playerOne.innerHTML = name;
playerTwo.innerHTML = "Computer";

var scoreKeeper = function() {
    playerOneScore.innerHTML = splitDeckArray[0].length;
    playerTwoScore.innerHTML = splitDeckArray[1].length;
};

//click start button to shuffle cards and begin game
var shuffleClick = shuffleBtn.addEventListener("click", function() {
    splitDeck(shuffle(deckCopy));
    scoreKeeper();
    roundWinner.innerHTML = "Ok, you're ready to play! Click the FLIP button to start the game.";
});


var flipCards = playBtn.addEventListener("click", function() {
    drawCards(splitDeckArray);
    moveCardsToWinner(newCardsArray);
    scoreKeeper();

    playerCard1.innerHTML = card1.card;
    playerCard2.innerHTML = card2.card;
});

// //Play Again Button
// playAgainBtn.innerHTML = "Play Again?";
// var playAgainYes = playAgainBtn.addEventListener("click", function() {
//   splitDeck(shuffle(deckCopy));
//   while (deck1.length > 0 && deck2.length > 0) {
//     moveCardsToWinner(drawCards([deck1, deck2]));
//   }
//   declareWinner();
//   confirmPlay();
// });
