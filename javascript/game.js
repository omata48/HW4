//for the game logic (asking questions and choosing right or wrong)

var headerEl = document.querySelector("header");
var startButton = document.getElementById("start-quiz");
var timerEl = document.getElementById("current-time");
var startingScreen = document.getElementById("main-screen");
var questionsScreen = document.getElementById("questions-screen");
var endGameScreen = document.getElementById("end-game-screen");
var questionsEl = document.getElementById("question");
var answersContainerEl = document.getElementById("answers");
var questionBank = JSON.parse(localStorage.getItem("questions"));
var answerButtons = document.querySelectorAll(".answers");
var correctAlert = document.getElementById("ifCorrect");
var finalScoreEl = document.getElementById("final-score");
var initialsEl = document.getElementById("initials");
var submitBtn = document.getElementById("submit-button");

var timeLeft = 0;
var questionIndex = 0;
var correctAnswer = "";
var initials;
var timerInterval;
var finalScore = 0;

function objectAppear(object) {
    if (object.style.display === "none"){
        object.style.display = "block";
    } else {
        object.style.display = "none";
    }
}

function startQuiz(){
    // console.log("running")
    timeLeft = 60;
    timerEl.textContent = timeLeft;

    objectAppear(startingScreen);
    objectAppear(questionsScreen);
    getQuestions();

    timerInterval = setInterval( function(){
        timerEl.textContent = timeLeft;
        // timer ends if timeleft === 0 or questionIndex === questionBank.length
        if (timeLeft === 0){
            clearInterval(timerInterval);
            alert("Out of Time");
            objectAppear(questionsScreen);
            questionIndex = -1;
            finalScore = timerEl.textContent;
            finalScoreEl.innerHTML = finalScore;
            objectAppear(headerEl);
            objectAppear(endGameScreen);
            // objectAppear(startingScreen); // here for testing timer
        }
        timeLeft--;
    }, 1000)
}

function checkIfCorrect(guess,correct){
    console.log(guess);
    console.log(correct);
    if (guess === correct){
        correctAlert.innerHTML = "-----------Correct!";
    } else{
        timeLeft -= 5;
        timerEl.textContent = timeLeft;
        correctAlert.innerHTML = "-----------Wrong...";
    }
    objectAppear(correctAlert);
    var removeFeedback = setTimeout( function(){
        objectAppear(correctAlert);
    }, 800);
}

function getQuestions() {
    // console.log(questionIndex)
    console.log(questionIndex)

    var j = 1;

    var currentQuestionPage = questionBank[questionIndex];
    // console.log(currentQuestionPage);
    // key for question == "title"
    var currentQuestion = currentQuestionPage.title;
    // console.log(currentQuestion);
    questionsEl.innerHTML = currentQuestion;
    // key for array of answers == "choices"
    var answerChoices = currentQuestionPage.choices;
    // console.log(answerChoices);
    answerChoices.forEach(function(element){
        answerEl = answerButtons[j-1];
        answerEl.id = element; 
        answerEl.innerHTML = j+". " + element;
        answersContainerEl.appendChild(answerEl);
        j++
    })  
    // key for answer == "answer"
    correctAnswer = currentQuestionPage.answer;
    // console.log(correctAnswer);
}



startButton.addEventListener("click",startQuiz);
answersContainerEl.addEventListener("click",function(){
    event.preventDefault();
    console.log("click");
    var theTarget = event.target;
    checkIfCorrect(theTarget.id,correctAnswer);
    questionIndex++;
    if (questionIndex === questionBank.length){
        clearInterval(timerInterval);
        alert("Out of Questions");
        objectAppear(questionsScreen);
        questionIndex = 0;
        finalScore = timerEl.textContent;
        finalScoreEl.innerHTML = finalScore;
        objectAppear(headerEl);
        objectAppear(endGameScreen);
        // objectAppear(startingScreen);
    }
    getQuestions();
})
submitBtn.addEventListener("click",function(){
    // save initials to LS to use with high score page
    var initials =  initialsEl.value;
    var user = {initials, finalScore};
    user = JSON.stringify(user);
    localStorage.setItem("user-score",user);
})