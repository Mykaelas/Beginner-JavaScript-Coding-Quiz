// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// Questions on Javascript Fundementals

// 1.Which of the folowing is the correct syntax to redirect a url using JavaScript? A. window.location='http://www.newlocation.com'; <- correct b. document location='http://www.newlocation.com' c. browser.location='http://newlocation.com'; d. navigator.location='http://newlocation.com';
// Created elements for the HTML page
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var paragraphEl = document.createElement("p");
var buttonEl = document.createElement("button");


h1El.textContent = "Welcome to my quiz!";
paragraphEl.textContent = "I hope you enjoy the quiz";
buttonEl.textContent = "Start";

body.appendChild(h1El);
body.appendChild(infoEl);
body.appendChild(paragraphEl);
body.appendChild(buttonEl);

h1El.setAttribute("style", "margin:auto; width: 50%; text-algin:center;");

generateBtn.addEventListener("click",);