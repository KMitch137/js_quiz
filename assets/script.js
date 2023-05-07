var startButton = document.getElementById("start");

var highScores = document.getElementById("highscores-screen");

var quizIntro = document.querySelector(".quiz-intro");

var quizFinish = document.querySelector(".quiz-finish-screen");

var questionScreen = document.querySelector(".question-screen")

var timerEl = document.getElementById('timer');

var questions = [question1, question2, question3]

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

function startQuiz() {
    quizIntro.style.display = "none"
    questionScreen.style.display = "block"
    countDown();
}

function endGame() {
    questionScreen.style.display = "none";
    quizFinish.style.display = "block";
}


start.addEventListener("click", startQuiz, countDown)


function countDown() {
    var timeLeft = 05;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = "Time Left :" + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Game Over";
            clearInterval(timeInterval);
            endGame()
        }
    }, 1000);
}
