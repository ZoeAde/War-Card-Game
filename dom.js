//Play Button
var playBtn = document.getElementsByClassName("play");
var playBtnClick = playBtn.addEventListener("click", playGame());
console.log(playBtn);
console.log(playBtnClick);


//Play Again Button
playAgainBtn.innerHTML = "Play Again?";
var playAgainYes = playAgainBtn.addEventListener("click", playGame());
