timeEl = document.querySelector(".time");
startEl = document.querySelector("#start");

function initGame() {
    var initGame = 
}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerInterval.textContent = secondsLeft + " seconds left.";

        if(seconds === 0) {
            clearInterval(timerInterval);
            sendMessage()
        }

    }, 2000);
}

startEl.addEventLisntener("click", function() {
    initGame()
});