var startButton = document.getElementById("start-button")
var startContainer = document.querySelector(".start-container")
var questionContainer = document.querySelector(".question-container")
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('timer')

var question1 = {
  title: "Are semicolons bad?",
  choices: ["Yes", "No", "Sometimes"],
  answer: "No",
}

var question2 = {
  title: "Are question marks bad?",
  choices: ["Yes", "No", "Sometimes"],
  answer: "No",
}

var question3 = {
  title: "Are hashtags bad?",
  choices: ["Yes", "No", "Sometimes"],
  answer: "No",
}

var questions = [question1, question2, question3]

function startQuiz() {
  startContainer.style.display = "none"
  questionContainer.style.display = "block"
}

startButton.addEventListener("click", startQuiz, countdown)

function countdown() {
  var timeLeft = 120;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = "Seconds remaining: " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = 'Game Over';
      clearInterval(timeInterval);
    }
  }, 1000);
}
startButton.addEventListener("click", countdown)
