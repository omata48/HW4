# Code Quiz

Learning how to utilize Web API's is crucial with JavaScript. In this repo, I made a webpage that has the user take a quiz from a bank of questions. These questions are stored on a separate JavaScript file that uploads the questions it has to the browser's local storage so that the other files can access them remotely.  

When creating the main page for the app (index.html) I created the HTMl as a series of screens that would appear as new parts of the game progressed. The sequence that I created was a Starting Page, Game Page(s), and Final Page and all the transitions are monitored by the game.js JavaScript file that handles the game logic.

The second HTMl file is the screen for keeping track of previous user scores (highscore.html). This page deals with keeping track of the scores that user's receive when finishing the quiz. 

## Starting Page

The HTMl is set up grouping the content into containers to which I gave ID's corresponding to their function. The javascript on this HTML page changes content by changing the display attribute for the corresponding containers from  
```display: none``` --> ```display: block```  
This gives the user the illusion of changing content. These changes are triggered primarily when the user clicks on either the **Start** button or an **Answer** button. 

For the quiz part of the project, after the user *Starts* the quiz, a timerInterval() is initiated for a set amount of time that is displayed on the header. The timer mechanic gives the user until the *timeLeft* value reaches 0 to continue answering questions. 

In order to check if an answer is right or wrong, I created a helper function that takes the "Answer" key from the question object that is currently on screen and compares it to the value of the button selected as the "Guess". If the "Answer" === "Guess", then the user is notified that the answer is correct. If the "Answer" !== "Guess", then 5 seconds are removed from the current time and the user is notified that the answer is wrong.  

After the time runs out, or the user answers all the questions, the user is presented a screen with an input to enter their intials. Additionally, on the screen is displayed the score the user got which is parsed from the "timeLeft" variable. After the user enters their initials in the "input" value and clicks the submit button, the value entered is stored to the local storage as "user-score" to be used in the highscores page.

## High Scores Page

The main function for this page is to be able to store and relay the high scores earned by the user. These elements are received from the local storage by using the keys "user-score" and "high-scores". The objects received are stored in an array. This array is then run through a helper function I created called "SortItems" that sorts the scores based on their .finalScore attribute. It then places them back into the "high-scores" storage and removes the "user-score" item so it will not be duplicated. 