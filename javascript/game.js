//for the game logic (asking questions and choosing right or wrong)

var startButton = document.getElementById("start-quiz");
var timerEl = document.getElementById("current-time");

var timeLeft = 0

function startQuiz(){

    var timerInterval = setInterval( function(){
        if (timeLeft == 0){
            clearInterval(timerInterval);
            alert("Game Over");
            location.replace
        }

        timeLeft--;
    }, 1000)
}


startButton.addEventListener("click",startQuiz);