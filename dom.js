var startBtn = document.getElementById("start");
var playBtn = document.getElementById("play");
var playerOne = document.getElementById("player1");
var playerTwo = document.getElementById("player2");
var playerOneCard = document.getElementById("playerCard1");
var playerTwoCard = document.getElementById("playerCard2");

var roundWinner = document.getElementById("winnerAlert");
var playerOneScore = document.getElementById("score1");
var playerTwoScore = document.getElementById("score2");

var deckCopy = deck.slice();
var deck1 = [];
var deck2 = [];
var splitHands = [];
var newCardsArray = [];
var card1 = [];
var card2 = [];

var name = prompt("What is your name?");
playerOne.innerHTML = name;
playerTwo.innerHTML = "Computer";

var scoreKeeper = function() {
  while (splitHands[0] > 0 && splitHands[1] > 0) {
    playerOneScore.innerHTML = splitHands[0].length;
    playerTwoScore.innerHTML = splitHands[1].length;
  }
};

//click start button to shuffle cards and begin game
var startGameClick = startBtn.addEventListener("click", function() {
    var shuffledDeck = shuffle(deckCopy);
    console.log(shuffledDeck);
    var splitHands = splitDeck(shuffledDeck);
    console.log(splitHands);
    card1 = splitHands[0].shift();
    card2 = splitHands[1].shift();
    playerCard1.innerHTML = card1.card;
    playerCard2.innerHTML = card2.card;
    newCardsArray.push(card1, card2);
    playerOneScore.innerHTML = 26;
    playerTwoScore.innerHTML = 26;
    return newCardsArray;
});



var flipCards = playBtn.addEventListener("click", function() {
  playerCard1.innerHTML = card1.card;
  playerCard2.innerHTML = card2.card;
  moveCardsToWinner(newCardsArray);
  // playerOneScore.innerHTML = splitHands[0].length;
  // playerOneScore.innerHTML = splitHands[1].length;
});


// Draw Cards
var cardClick = playBtn.addEventListener("click", function() {
  playerCard1.innerHTML = card1.card;
  playerCard2.innerHTML = card2.card;
  moveCardsToWinner(newCardsArray);
});


scoreKeeper();

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
