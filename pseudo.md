> WHEN I click the start button THEN a timer starts and I am presented with a question
items:
* need start button
    * click handler for the button
    *setInterval for when the button is clicked
    *hide button when the timer starts
* timer span on pages (timeleft)
* container for new question
* container for questions

>WHEN I answer a question THEN I am presented with another question
items:
* make the answer choices buttons (clickable option)
* eventListeners onclick change question and all answers presented

>WHEN I answer a question incorrectly THEN time is subtracted from the clock
items:
* answer choices need a class or id indicating correct answer
* check if answer chosen is correct
* if it is not, subtract timeleft
* notification under question marking correct or wrong answer

>WHEN all questions are answered or the timer reaches 0 THEN the game is over
items:
* index keeping track of question number
    * if reach last index of question, endGame
* if timeleft === 0, endGame

>WHEN the game is over THEN I can save my initials and score
items:
* endgame has:
    * "All done!" title
    * final score readout
    * Enter initials: fieldinput submit button
* pressing submit takes you to highscores page
* field input is saved to localstorage and used in the next page
