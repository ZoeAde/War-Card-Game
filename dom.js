var playBtn = document.getElementById("play");
var shuffleBtn = document.getElementById("shuffle");
var dealBtn = document.getElementById("deal");
var playerOne = document.getElementById("player1");
var playerTwo = document.getElementById("player2");
var faceUp = document.getElementsByClassName("cards");
var playerOneScore = document.getElementById("score1");
var playerTwoScore = document.getElementById("score2");

var deckCopy = deck.slice();
var deck1 = [];
var deck2 = [];



//click play button to prompt names
var namePrompt = playBtn.addEventListener("click", function() {
    var name = prompt("What is your name?");
    playerOne.innerHTML = name;
    playerTwo.innerHTML = "Computer";
});



//Shuffle Button
var shuffleClick = shuffleBtn.addEventListener("click", function(shuffleCards) {
    var currentIndex = deckCopy.length;
    var tempValue, randomIndex;
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempValue = deckCopy[currentIndex];
    deckCopy[currentIndex] = deckCopy[randomIndex];
    deckCopy[randomIndex] = tempValue;
  }
  alert("The deck has been shuffled and split between you and your competitor! Click 'deal' to continue!");
  return deckCopy;
});

//Deal Button
var dealClick = dealBtn.addEventListener("click", function(shuffledDeck) {
  splitDeckArray = [];
  deck1 = deckCopy.slice(0, 26);
  deck2 = deckCopy.slice(26, 53);
  splitDeckArray.push(deck1, deck2);
  console.log("dealClick: " + splitDeckArray);

  return splitDeckArray;
});


// //Draw Cards
// var drawCards = faceUp.addEventListener("click", function(handArray) {
//     newCardsArray = [];
//     var card1 = handArray[0].shift();
//     //playerOne = card1[card];
//     var card2 = handArray[1].shift();
//     // playerTwo = card2[card];
//     newCardsArray.push(card1, card2);
//     console.log("drawCards: " + newCardsArray);
//     return newCardsArray;
// });






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
