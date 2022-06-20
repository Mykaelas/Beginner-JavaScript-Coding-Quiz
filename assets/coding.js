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
var paragraphEl = document.createElement("p");
var buttonEl = document.createElement("button");
var infoEl = document.createElement("div");
var highScoreEl = document.createElement("header");
var timerEl = document.createElement("header");


// text content elements
h1El.textContent = "Welcome to my quiz!";
paragraphEl.textContent = "Here is a very short quiz to test your JavaScript knowledge. Try to answer each question as quickly and CORRECTLY, as you can! Each incorrect answer will cause you to lose points. Try your best to get first place on the Highscore board.";
buttonEl.textContent = "Start";
highScoreEl.textContent = "Highscore Leader Board";
timerEl.textContent = "0";

// appending of elements
body.appendChild(highScoreEl);
body.appendChild(timerEl);
body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(paragraphEl);
infoEl.appendChild(buttonEl);


// Element attributes/CSS of the elements
highScoreEl.setAttribute("style", "text-align: left; font-size: 25px; ");
timerEl.setAttribute("style", "text-align: right;");
body.setAttribute("style", "margin:auto; width: 50%; padding: 50px;");
infoEl.setAttribute("style","" );
h1El.setAttribute("style", "font-size: 100px; color:darkgreen; padding: 135px;");
paragraphEl.setAttribute("style", "background-color: limegreen; color: darkgreen; font-size: 25px;");
buttonEl.setAttribute("style", " display: block; margin: 0 auto; border: limegreen; border-style: solid; border-width: thick; border-radius:20px; font-size: 20px; background-color: white;");

generateBtn.addEventListener("click",);



var questions = [
    {
        prompt: "Which of the folowing is the correct syntax to redirect a url using JavaScript?",

        choices: "window.location='http://www.newlocation.com'\n(a)   document location='http://www.newlocation.com'\n(b)  browser.location='http://newlocation.com'\n(c) navigator.location='http://newlocation.com'\n (d)",
    
        answer:"a"
    },

    {
        prompt: "Event handlers are a type of:",

        choices: "Functions\n(a) interface\n (b) classes\n (c)  none of the above\n (d)",
        
        answer: "a"
    },

    {
        prompt: "___ specifies the property fo an event:",

        choices: "name \n(a) type \n (b)  value \n (c)  all of the above \n (d)",

        answer: "b"
    },

    {
        prompt: "How do you create a function in JavaScript?",

        choices: "function + myFunction() \n (a) function = myFunction() \n(b)  function myFunction() \n (c) function:myFunction() \n (d)",

        answer: "c"
    },

    {
        prompt: "How do you find the number with the highest value of x and y?",

        choices: "celi(x,y)\n (a) top(x,y) \n(b)  Math.ceil(x,y)\n (c) Math.max(x,y) \n (d)",

        answer: "d"
    }
]