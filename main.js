var timeEl = document.querySelector("#time");
var startEl = document.querySelector(".start-quiz");
var mainPage = document.querySelector(".main");
var openingPage = document.querySelector(".opening");
var leaderEL = document.querySelector("#leaderboard");
var questionsEl = document.querySelector("#q-and-a");
var timerEl =  document.querySelector("#time");
var timerCount = 15;

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
];

function initGame() {
    var openingPage = document.querySelector(".opening");
    
    openingPage.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");

    startTimer();
}

function startTimer() {
    var timerInterval = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;

        if (timerCount === 0) {
          clearInterval(timerInterval);
        
          quizEnd();
        }

    }, 1000);
}

function quizEnd() {
  timerEl.textContent = " ";
  var leaderEL = document.querySelector("#leaderboard")
  questionsEl.setAttribute("class", "hide");

  leaderEL.removeAttribute("class");
}

startEl.onclick = initGame;