var timeEl = document.querySelector(".time");
var startEl = document.querySelector("#start");

var timer;
var timerCount;


function initGame() {
    
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;

        if(timerCount >=0) {
            if(correct && timerCount > 0) {
                resetInterval(timer);
                nextQuestion
            }
        }

        if (timerCount === 0) {
            resetInterval(timer);
            nextQuestion()
        }

    }, 2000);
}

startEl.addEventLisntener("click", function() {
    initGame()
});