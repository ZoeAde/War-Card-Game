var playBtn = document.getElementById("play");
var playerOne = document.getElementById("player1");
var playerTwo = document.getElementById("player2");
var playerOneCard = document.getElementById("playerCard1");
var playerTwoCard = document.getElementById("playerCard2");

var playerOneScore = document.getElementById("score1");
var playerTwoScore = document.getElementById("score2");

var deckCopy = deck.slice();
var deck1 = [];
var deck2 = [];
var


//click play button to prompt names
var namePrompt = playBtn.addEventListener("click", function() {
    var name = prompt("What is your name?");
    playerOne.innerHTML = name;
    playerTwo.innerHTML = "Computer";
    var splitCards = startGame(deckCopy);
    return splitCards;
});


// Draw Cards
var cardClick = playerOneCard.addEventListener("click", function(namePrompt) {
  newCardsArray = [];
  var card1 = namePrompt[0].shift();
  var card2 = namePrompt[1].shift();
  newCardsArray.push(card1, card2);
  return newCardsArray;
});


// var flipped = drawCards(namePrompt);
//   console.log(flipped);
  // playerOneCard.src = card1[0];
  // playerTwoCard.src = card2[0];





// var scoreKeeper = function() {
//   while (deck1 > 0 && deck2 > 0) {
//     playerOneScore.innerHTML = (deck1.length);
//     playerTwoScore.innerHTML = (deck2.length);
//   }
// };












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
