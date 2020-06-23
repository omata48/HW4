// for keeping track of the high score mechanic of the web app

var clearScoresBtn = document.getElementById("clear-scores");
var scoresContainer = document.getElementById("scores-container");

var highScores = [];

function renderScores() {
  // Clear todoList element and update todoCountSpan
  scoresContainer.innerHTML = "";

  // Render a new li for each todo
  for (var i = 0; i < highScores.length; i++) {
    var currentUser = highScores[i];
    var currentInitials = currentUser.initials;
    var currentScore = currentUser.finalScore;
    console.log(currentInitials);
    console.log(currentScore);

    var pEl = document.createElement("p");
    pEl.textContent = currentInitials + " - " + currentScore;
    pEl.setAttribute("data-index", i);
    pEl.className = "bg-secondary text-white"
    scoresContainer.appendChild(pEl);
  }
}

function init() {
  // Write code here to check if there are todos in localStorage
  // If so, parse the value from localStorage and assign it to the todos variable
  var startingScores = JSON.parse(localStorage.getItem("user-score"));
  console.log(startingScores);
  highScores = [startingScores];
  console.log(highScores);
  // Render todos to the DOM
  renderScores();
}

function storeScores(listObj) {
  // Add code here to stringify the todos array and save it to the "todos" key in localStorage
  localStorage.setItem("high-scores",JSON.stringify(listObj));
}

// remove with complete button
clearScoresBtn.addEventListener("click", function(event){
  var element = event.target
  if (element.matches("button")){
    console.log("click");
    var index = parseInt(element.parentElement.getAttribute("data-index"));
    todos.splice(index, 1);
    storeTodos(todos);
    renderTodos();
  }
})

init();
renderScores();