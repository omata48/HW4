//for the game logic (asking questions and choosing right or wrong)

var startButton = document.getElementById("start-quiz");
var timerEl = document.getElementById("current-time");
var startingScreen = document.querySelector("main");

var timeLeft = 0
var questionsLeft

function objectAppear(object) {
    if (object.style.display === "none"){
        object.style.display = "block";
    } else {
        object.style.display = "none";
    }
}

function startQuiz(){
    timeLeft = 5;
    timerEl.textContent = timeLeft;
    objectAppear(startingScreen);
    var timerInterval = setInterval( function(){
        timerEl.textContent = timeLeft;
        if (timeLeft == 0){
            clearInterval(timerInterval);
            alert("Game Over");
            objectAppear(startingScreen); // here for testing timer
        }

        timeLeft--;
    }, 1000)
    getQuestions();
}

function getQuestions() {
    question = document.createElement("button");
}

startButton.addEventListener("click",startQuiz);