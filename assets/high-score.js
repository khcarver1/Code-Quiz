var highScore = localStorage.getItem("timeremaining");
var initialsEntered = document.querySelector("#initialbox");
var saveScore = document.querySelector("#savescorebtn");

var scoreBoardData = document.createElement("td")
var tableHeader = document.querySelector("th")
var scoreCounter = 0;

var saveMyScore = function() {
    
}

document.querySelector("#savescorebtn").addEventListener('click', function () {
    var initialBoxInput = initialsEntered.value.trim()
    scoreBoardData.textContent = "Your score is " + highScore + ". Player = " + initialBoxInput;
    var saveScoreInfo = "Your score is " + highScore + ". Player = " + initialBoxInput;
    tableHeader.append(scoreBoardData);
    localStorage.setItem("highscoreinfo",saveScoreInfo);

});








