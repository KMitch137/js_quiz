var startButton = document.getElementById("start");
var nextButton = document.getElementById("next-question");
var highScoreButton = document.getElementById("see-scores");
var highScores = document.getElementById("top-score");
var quizIntro = document.querySelector(".quiz-intro");
var quizFinish = document.querySelector(".quiz-finish-screen");
var questionScreen = document.querySelector(".question-screen");
var timerEl = document.getElementById('timer');
var scoresList = document.querySelector("scores-list");
var submitScores = document.getElementById("submit-score");
var answer1El = document.querySelector(".answer1");
var answer2El = document.querySelector(".answer2");
var answer3El = document.querySelector(".answer3");
var answer4El = document.querySelector(".answer4");
var questionEL = document.querySelector(".question")

var question1 = {
    question: "Are semicolons bad?",
    choices: ["Yes", "No", "Sometimes", "what?"],
    answer: "No",
}

var question2 = {
    question: "Are question marks bad?",
    choices: ["Yes", "No", "Sometimes", "What?"],
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

var questions = [question1, question2, question3, question4];

//generates questions when quiz starts- change questions index
function getQuestion() {

    var i = Math.floor(Math.random() * 4);

    questionEL.textContent = questions[i].question
    answer1El.textContent = questions[i].choices[0]
    answer2El.textContent = questions[i].choices[1]
    answer3El.textContent = questions[i].choices[2]
    answer4El.textContent = questions[i].choices[3]

}

nextButton.addEventListener("click", getQuestion)







submitScores.addEventListener("click", saveScores)

function saveScores() {
    var highScore = {
        student: student.value,
        grade: grade.value,
    }
    localStorage.setItem("highScore", JSON.stringify(highScore));
}







function startQuiz() {
    quizIntro.style.display = "none";
    questionScreen.style.display = "block";
    highScoreButton.style.display = "none";
    countDown();
    getQuestion();
}

function endGame() {
    questionScreen.style.display = "none";
    quizFinish.style.display = "block";
    highScoreButton.style.display = "block";
}

function resetGame() {
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
    var timeLeft = 60;
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



