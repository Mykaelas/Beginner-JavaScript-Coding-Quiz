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
// 2. Event handlers are a type of: A. Functions <- correct b. interface c. classes d. none of the above
// 3. ___ specifies the property fo an event: a. name b. type <- correct c. value d. all of the above
// 4. How do you create a function in JavaScript? a. function + myFunction() b. function = myFunction() c. function myFunction() <- correct d. function:myFunction()
// 5. How do you find the number with the highest value of x and y? a. celi(x,y) b. top(x,y) c. Math.ceil(x,y) d. Math.max(x,y) <-- correct

// Created elements for the introduction HTML page
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var paragraphEl = document.createElement("p");
var buttonEl = document.createElement("button");

// text content elements
h1El.textContent = "Welcome to my quiz!";
paragraphEl.textContent = "Here is a very short quiz to test your JavaScript knowledge. Try to answer each question as quickly and CORRECTLY, as you can! Each incorrect answer will cause you to lose points. Try your best to get first place on the Highscore board.";
buttonEl.textContent = "Start";


// appending of elements
body.appendChild(h1El);
body.appendChild(infoEl);
body.appendChild(paragraphEl);
body.appendChild(buttonEl);


body.setAttribute("style", "margin:auto; width: 50%; padding: 50px;");
h1El.setAttribute("style", "margin:auto; width: 50%; text-algin:center; font-size: 100px; padding: 150px;");
paragraphEl.setAttribute("style", "font-size: 25px;");
buttonEl.setAttribute("style", "margin:auto; border-radius:20px; font-size: 20px; background-color: white;");
generateBtn.addEventListener("click",);