var startEl = document.querySelector("#start-quiz");
var openingPage = document.querySelector(".opening");
var leaderEL = document.querySelector("#leaderboard");
var questDiv = document.querySelector("#q-and-a");
var choicesEl = document.querySelector("#choices-text")
var currentQuestionIndex = 0
var feedbackEl = document.getElementById("feedback");
var timerEl = document.querySelector("#time");
var timerCount = 15;
var timerId;
var inputEl = document.querySelector("#userName");
var submitEl = document.querySelector("#submit");


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

  questDiv.classList.remove('hide');

  timerId = setInterval(startTimer, 1000)

  timerEl.textContent = timerCount;

  startTimer();
  getQuestion();
}

function getQuestion() {
  var randomQuestion = questions[currentQuestionIndex];
  var questionsEL = document.querySelector("#question-main")
  questionsEL.textContent = randomQuestion.title;

  choicesEl.innerHTML = "";

  randomQuestion.choices.forEach(function(choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ", " + choice;

    choiceNode.onClick = clickQuestion;

    choicesEl.appendChild(choiceNode)
  })
}

function clickQuestion() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 5;

    if (time < 0) {
      time = 0
    }

    timerEl.textContent = timerCount;

    feedbackEl.textContent = "Nope!";

  } else {
    feedbackEl.textContent = "That's it!"
  }


  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion()
  }
  console.log('im being clicked')
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

  questDiv.setAttribute("class", "hide");

  leaderEL.classList.remove('hide');
}

//The following code is the functions to save the users name along with their highscore.
function saveHighscore() {
  var input = inputEl.value.trim();

  if (input !== "") {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
      score: timerCount,
      input: input
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href = "highscore.html";
    console.log(newScore)
  }
}

//--button elements--//
startEl.addEventListener('click', initGame);

submitEl.addEventListener('click', saveHighscore);
