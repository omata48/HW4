// for keeping track of the high score mechanic of the web app

var clearScoresBtn = document.getElementById("clear-scores");
var scoresContainer = document.getElementById("scores-container");

var highScores = [];
var newScore;

function init() {
  // Write code here to check if there are todos in localStorage
  // If so, parse the value from localStorage and assign it to the todos variable
  newScore = JSON.parse(localStorage.getItem("user-score"));
  highScores = JSON.parse(localStorage.getItem("high-scores"));
  // first time loading page, will return null, can set array to start
  if (highScores === null){
    highScores = []
  }
  // console.log(newScore);
  if (newScore !== null){
    highScores.push(newScore);
    localStorage.removeItem("user-score");
  }
  // Render scores to the DOM
  renderScores();
}

function renderScores() {
  // Clear todoList element and update todoCountSpan
  scoresContainer.innerHTML = "";
  // console.log(highScores.length);
  // sort Scores by highest on index 0 before rendering
  if (highScores.length > 1){
    highScores = sortScores(highScores);
  }
  // Render a new li for each todo
  for (var i = 0; i < highScores.length; i++) {
    var currentUser = highScores[i];
    var currentInitials = currentUser.initials;
    var currentScore = currentUser.finalScore;
    // console.log(currentInitials);
    // console.log(currentScore);

    var pEl = document.createElement("p");
    pEl.textContent = (i+1) + ". " + currentInitials + " - " + currentScore;
    pEl.setAttribute("data-index", i);
    pEl.className = "bg-secondary text-white scores"
    scoresContainer.appendChild(pEl);
  }
  storeScores(highScores);
  // console.log(highScores);
  // var score1 = highScores[0].finalScore;
  // console.log(score1);
}

function storeScores(listObj) {
  // Add code here to stringify the todos array and save it to the "todos" key in localStorage
  localStorage.setItem("high-scores",JSON.stringify(listObj));
}

function sortScores(scoresArray){
  // will not run unless at least length 2
  // needs to go from bottom to top
  // console.log("Original:");
  // console.log(scoresArray);
  // scoresArray = scoresArray.reverse();
  // console.log("Reverse:");
  // console.log(scoresArray);
  var sortedArray = scoresArray;
  var arrayLength = scoresArray.length-1;
  var swapped;
  do {
    swapped = false
    for (var i = 0;i < arrayLength;i++){
      if ((scoresArray[i].finalScore) < (scoresArray[i+1].finalScore)){
        var temp  = sortedArray[i];
        sortedArray[i] = sortedArray[i+1];
        sortedArray[i+1] = temp;
        swapped = true;
      }
    } 
  
  } while(swapped);
  return sortedArray;
}

// remove with complete button
clearScoresBtn.addEventListener("click", function(){
  localStorage.removeItem("high-scores");
  init();
})

init();