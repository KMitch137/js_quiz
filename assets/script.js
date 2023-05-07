var startButton = document.getElementById("start");
var highScoreButton = document.getElementById("see-scores")
var highScores = document.getElementById("top-score");
var quizIntro = document.querySelector(".quiz-intro");
var quizFinish = document.querySelector(".quiz-finish-screen");
var questionScreen = document.querySelector(".question-screen")
var timerEl = document.getElementById('timer');
var questions = [question1, question2, question3]


var question1 = {
    title: "Are semicolons bad?",
    choices: ["Yes", "No", "Sometimes", "what?"],
    answer: "No",
}

var question2 = {
    title: "Are question marks bad?",
    choices: ["Yes", "No", "Sometimes", "what?"],
    answer: "No",
}

var question3 = {
    title: "Are hashtags bad?",
    choices: ["Yes", "No", "Sometimes", "What?"],
    answer: "No",
}

var question3 = {
    title: "What symbols must be used when calling a function??",
    choices: ["$$", "()", "''", "!!"],
    answer: "()",
}

function startQuiz() {
    quizIntro.style.display = "none"
    questionScreen.style.display = "block"
    highScoreButton.style.display = "none"
    countDown();
}

function endGame() {
    questionScreen.style.display = "none";
    quizFinish.style.display = "block";
    highScoreButton.style.display = "block";
}

function resetGame() {
    quizFinish.style.display = "none"
    quizIntro.style.display = "block"
    location.reload();
}

//starts quiz: timer starts and questions display
start.addEventListener("click", startQuiz, countDown)

// Timer Settings
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

// Resets game back to main scrren
reset.addEventListener("click", resetGame)

//Displays highiscores
highScoreButton.addEventListener("click", seeScores)

function seeScores() {
    quizFinish.style.display = "none"
    quizIntro.style.display = "none"
    highScores.style.display = "block"
}

//generates questions when quiz starts
function getQuestions() {
    quizQuestion = questions[Math.floor(Math.random() * questions.length)];

}


