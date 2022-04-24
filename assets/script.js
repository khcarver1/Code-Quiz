var answerOne = document.querySelector("#a1");

//correct answer function
//go to next question and restart timer
answerOne.addEventListener('click', function () {
  console.log("You selected the correct answer bro")
  correctAnswer();
});
//all questions answered or timer reaches 0 then game is over
//ask for the players initials and display scoress
var gameLost = function() {
  console.log("gameLost function is working");
}


