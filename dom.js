var playBtn = document.getElementById("play");
var playerOne = document.getElementById("player1");
var playerTwo = document.getElementById("player2");
var playerOneCard = document.getElementById("playerCard1");
var playerTwoCard = document.getElementById("playerCard2");

var cardReplace1 = document.getElementById("player1card");
var cardReplace2 = document.getElementById("player2card");

var roundWinner = document.getElementById("winnderAlert");
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


var flipCard = function() {


}

var scoreKeeper = function() {
  while (splitHands[0] > 0 && splitHands[1] > 0) {
    playerOneScore.innerHTML = (splitHands[0].length);
    playerTwoScore.innerHTML = (splitHands[1].length);
  }
};

//click play button to prompt names
var startGameClick = playBtn.addEventListener("click", function() {
    var shuffledDeck = shuffle(deckCopy);
    console.log(shuffledDeck);
    var splitHands = splitDeck(shuffledDeck);
    console.log(splitHands);
    card1 = splitHands[0].shift();
    card2 = splitHands[1].shift();
    newCardsArray.push(card1, card2);
    return newCardsArray;
});



var firstClick = playerOneCard.addEventListener("click", function() {
  cardReplace1.innerHTML = card1.card;
  cardReplace2.innerHTML = card2.card;
  moveCardsToWinner(newCardsArray);
});


// Draw Cards
var cardClick = cardReplace1.addEventListener("click", function() {
  cardReplace1.innerHTML = card1.card;
  cardReplace2.innerHTML = card2.card;
  moveCardsToWinner(newCardsArray);
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
