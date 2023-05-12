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
var finalScore = document.getElementById("your-score")
var answer1El = document.querySelector(".answer1");
var answer2El = document.querySelector(".answer2");
var answer3El = document.querySelector(".answer3");
var answer4El = document.querySelector(".answer4");
var questionEL = document.querySelector(".question");
var timeLeft = 5;
var timeInterval;
var studentName = document.getElementById("save-score");

var question1 = {
    question: "Are semicolons bad?",
    choices: ["Yes", "No", "Sometimes", "What?"],
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
var qi = 0
//generates questions when quiz starts- change questions index
function getQuestion() {
    if (qi == questions.length) return endGame();
    questionEL.textContent = questions[qi].question
    answer1El.textContent = questions[qi].choices[0]
    answer2El.textContent = questions[qi].choices[1]
    answer3El.textContent = questions[qi].choices[2]
    answer4El.textContent = questions[qi].choices[3]

}


answer1El.addEventListener("click", wrongAnswer)
answer2El.addEventListener("click", rightAnswer)
answer3El.addEventListener("click", wrongAnswer)
answer4El.addEventListener("click", wrongAnswer)

function wrongAnswer() {
    alert("WRONG ANSWER");
    timeLeft -= 5;
    qi++;
    getQuestion();

}

function rightAnswer() {
    qi++;
    getQuestion();

}


submitScores.addEventListener("click", saveScores)

async function saveScores() {
    var score = await localStorage.students ? JSON.parse(localStorage.students) : [];
    score.push({"student":studentName,"score":timeLeft});
    localStorage.students = JSON.stringify(score);
}



function startQuiz() {
    quizIntro.style.display = "none";
    questionScreen.style.display = "block";
    highScoreButton.style.display = "none";
    countDown();
    getQuestion();
}

var score = document.getElementById("score");

function endGame() {
    clearInterval(timeInterval);
    questionScreen.style.display = "none";
    quizFinish.style.display = "block";
    highScoreButton.style.display = "block";
    score.innerHTML=timeLeft;
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
    timeInterval = setInterval(function () {
        timeLeft--;

        if(timeLeft<1) {
            clearInterval(timeInterval);
            timeLeft = 0;
            endGame();
        }

        timerEl.textContent = "Timer: 00:" + timeLeft;

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



