var startButton = document.getElementById("start");
var highScoreButton = document.getElementById("see-scores");
var highScores = document.getElementById("top-score");
var quizIntro = document.querySelector(".quiz-intro");
var quizFinish = document.querySelector(".quiz-finish-screen");
var questionScreen = document.querySelector(".question-screen");
var timerEl = document.getElementById('timer');
var questions = [question1, question2, question3, question4];
var scoresList = document.querySelector("scores-list");
var submitScores = document.getElementById("submit-score");

//generates questions when quiz starts
function getQuestion() {
    questionContainer = []

}

function saveScores() {

}


submitScores.addEventListener("click", saveScores )


    //SAVE SCORES TO OL USING JSON



    //add scores to highscores



var question1 = {
    question: "Are semicolons bad?",
    choices: ["Yes", "No", "Sometimes", "what?"],
    answer: "No",
}

var question2 = {
    question: "Are question marks bad?",
    choices: ["Yes", "No", "Sometimes", "what?"],
    answer: "No",
}

var question3 = {
    question: "Are hashtags bad?",
    choices: ["Yes", "No", "Sometimes", "What?"],
    answer: "No",
}

var question4 = {
    question: "What symbols must be used when calling a function??",
    choices: ["$$", "()", "''", "!!"],
    answer: "()",
}

function startQuiz() {
    quizIntro.style.display = "none"
    questionScreen.style.display = "block"
    highScoreButton.style.display = "none"
    countDown();
    getQuestion();
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

function goBack() {
    quizFinish.style.display = "none"
    quizIntro.style.display = "block"
    highScores.style.display = "none"
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

back.addEventListener("click", goBack)

//Displays highiscores
highScoreButton.addEventListener("click", seeScores)

function seeScores() {
    quizFinish.style.display = "none"
    quizIntro.style.display = "none"
    highScores.style.display = "block"
}



