var deck = [
//spades
  {card: ["🂡"], score: 14 },
  {card: ["🂮"], score: 13 },
  {card: ["🂭"], score: 12 },
  {card: ["🂫"], score: 11 },
  {card: ["🂪"], score: 10 },
  {card: ["🂩"], score: 9 },
  {card: ["🂨"], score: 8 },
  {card: ["🂧"], score: 7 },
  {card: ["🂦"], score: 6 },
  {card: ["🂥"], score: 5 },
  {card: ["🂤"], score: 4 },
  {card: ["🂣"], score: 3 },
  {card: ["🂢"], score: 2 },
//hearts//
  {card: ["🂡"], score: 14 },
  {card: ["🂾"], score: 13 },
  {card: ["🂽"], score: 12 },
  {card: ["🂻"], score: 11 },
  {card: ["🂺"], score: 10 },
  {card: ["🂹"], score: 9 },
  {card: ["🂸"], score: 8 },
  {card: ["🂷"], score: 7 },
  {card: ["🂶"], score: 6 },
  {card: ["🂵"], score: 5 },
  {card: ["🂴"], score: 4 },
  {card: ["🂳"], score: 3 },
  {card: ["🂲"], score: 2 },
//clubs
  {card: ["🃑"], score: 14 },
  {card: ["🃞"], score: 13 },
  {card: ["🃝"], score: 12 },
  {card: ["🃛"], score: 11 },
  {card: ["🃚"], score: 10 },
  {card: ["🃙"], score: 9 },
  {card: ["🃘"], score: 8 },
  {card: ["🃗"], score: 7 },
  {card: ["🃖"], score: 6 },
  {card: ["🃕"], score: 5 },
  {card: ["🃔"], score: 4 },
  {card: ["🃓"], score: 3 },
  {card: ["🃒"], score: 2 },
//diamonds
  {card: ["🃁"], score: 14 },
  {card: ["🃎"], score: 13 },
  {card: ["🃍"], score: 12 },
  {card: ["🃋"], score: 11 },
  {card: ["🃊"], score: 10 },
  {card: ["🃉"], score: 9 },
  {card: ["🃈"], score: 8 },
  {card: ["🃇"], score: 7 },
  {card: ["🃆"], score: 6 },
  {card: ["🃅"], score: 5 },
  {card: ["🃄"], score: 4 },
  {card: ["🃃"], score: 3 },
  {card: ["🃂"], score: 2 },
];


function war() {

  //create a copy of the deck so that we can access it later if needed.
  var deckCopy = deck.slice();

  //function to shuffle the deck of cards
  var shuffle = function() {
     var currentIndex = deckCopy.length;
     var tempValue, randomIndex;
     while (0 !== currentIndex) {
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;
         tempValue = deckCopy[currentIndex];
         deckCopy[currentIndex] = deckCopy[randomIndex];
         deckCopy[randomIndex] = tempValue;
     }

      return deckCopy;
  };

  console.log(shuffle());

  //split the deck into 2.  A deck for each "player"
  var deck1 = deckCopy.splice(0, 26);
  var deck2 = deckCopy;

  //while loop for while either deck sitll has cards, play war.
  while (deck1.length > 0 && deck2.length > 0) {

    //pull the first card off each deck so that we can compare
    var hand1 = deck1.shift();
    var hand2 = deck2.shift();

    //conidtionals for comparing the score of each card to see who's score is greater.
    if (hand1.score > hand2.score) {
      //push both cards into the winners deck.
      deck1.push(hand1, hand2);
      console.log("Player 1: ", hand1.card);
      console.log("Player 2: ", hand2.card);
    } else if (hand1.score === hand2.score) {
      console.log("Player 1: ", hand1.card);
      console.log("Player 2: ", hand2.card);
      console.log("WAR!");
      //calling the function miniGame below if there is a tie in scores.
      miniGame();
    } else {
      deck2.push(hand2, hand1);
      console.log("Player 1: ", hand1.card);
      console.log("Player 2: ", hand2.card);
    }
  }

  //conditonal for whichever player sitll has cards, wins.
  if (deck1.length > 0) {
    alert("Player 1 WINS");
    var again = confirm("Play again?");
      if (again === true) {
        war();
      }
  } else {
    alert("Player 2 WINS");
    var again = confirm("Play again?");
      if (again === true) {
        war();
      }
  }

  //miniGame function for if there is a tie.
  function miniGame() {
    var p1War = deck1.splice(0, 4);
    var p2War = deck2.splice(0, 4);

    //if there is a tie, but its a players last card they lose
    if (p1War.length === 0) {
      alert("Player 2 WINS");
    } else if (p2War.length === 0) {
      alert("Player 1 WINS");
    } else {
      //draw three cards and compare the fourth, but if they don't have four cards, compare the last card they have.
      if (p1War[p1War.length -1].score > p2War[p2War.length - 1].score) {
        deck1.push(hand1, hand2);
        //to push an array back into an array, we need to push them back one by one.
        for (var i = 0; i < p1War.length; i++) {
          deck1.push(p1War[i]);
          deck1.push(p2War[i]);
        }
        console.log("Player 1 Wins the War.");
      } else if (p1War[p1War.length -1].score === p2War[p2War.length - 1].score) {
        miniGame();
      } else {
        deck2.push(hand2, hand1);
        for (var j = 0; j < p2War.length; j++) {
          deck2.push(p2War[j]);
          deck2.push(p2War[j]);
        }
        console.log("Player 2 Wins the War.");
      }
    }
  }
}

war();
