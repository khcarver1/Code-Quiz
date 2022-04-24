var time = localStorage.getItem("timeremaining");
var timer = document.querySelector("#timer");

var timeInterval = function () {
    document.querySelector(".wrong").addEventListener('click', function () {
        time -= 10
        localStorage.setItem("timeremaining", time);
        window.location = "./high-score-page.html";
    });
    setInterval(function() {
        time--
        document.querySelector("#timer").textContent = "Time remaining:" + time;
        if (time < 1) {
            timer.textContent = "Time is up, loser!";
            gameLost();
        }

        localStorage.setItem("timeremaining", time);
    }, 1000);

}
timeInterval();