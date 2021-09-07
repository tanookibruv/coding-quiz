var startEl = document.querySelector("#start-quiz");
var mainPage = document.querySelector(".main");
var openingPage = document.querySelector(".opening");
var leaderEL = document.querySelector("#leaderboard");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices")
var currentQuestionIndex = 0
var timerEl = document.querySelector("#time");
var timerCount = 15;
var timerId;
var inputEl = document.querySelector("#userName");
var submitEl = document.querySelector("#submit");

var userInput = [];

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



//--The following code represents the initial start of the game with the timer and high score functions--//
function initGame() {
  console.log('hello')
  var openingPage = document.querySelector(".opening");

  openingPage.setAttribute("class", "hide");

  questionsEl.classList.remove('hide');

  timerId = setInterval(startTimer, 1000)

  timerEl.textContent = timerCount;

  startTimer();
}

function getQuestions() {
  var currentQuestion = questions[currentQuestionIndex];

  var mainQuest = document.getElementById("questions");
  mainQuest.textContent = currentQuestion.title;

  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach(function (choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ", " + choice;

    choiceNode.addEventListener("click", questionClick);

    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 15;

    if (time < 0) {
      time = 0
    }

    timerEl.textContent = time;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    quizEnd()
  } else {
    getQuestions()
  }
}

function startTimer() {
  timerCount--;
  timerEl.textContent = timerCount;

  if (timerCount <= 0) {

    quizEnd();
  }

}

function quizEnd() {
  clearInterval(timerId)
  var leaderEL = document.querySelector("#leaderboard")

  var scoreEl = document.querySelector("#score");
  scoreEl.textContent = timerCount;

  questionsEl.setAttribute("class", "hide");

  leaderEL.classList.remove('hide');
}

//The following code is the functions to save the users name along with their highscore.
function saveHighscore() {
  var input = inputEl.value.trim();
  console.log("input")

  if (input !== "") {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
      score: timerCount,
      input: input
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href = "highscore.html";
    console.log("highscores")
  }
}

//--button elements--//
startEl.addEventListener('click', initGame);

submitEl.addEventListener('click', saveHighscore);