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



// Created elements for the introduction HTML page
var body = document.body;
var h1El = document.createElement("h1");
var paragraphEl = document.createElement("p");
var buttonEl = document.createElement("button");
var infoEl = document.createElement("div");
var timerEl = document.createElement("header");
var h2El = document.createElement("h2");

// Button elements for the choice options 
var button1El = document.createElement("button");
var button2El = document.createElement("button");
var button3El = document.createElement("button");
var button4El = document.createElement("button");


// text content elements
timerEl.textContent = "0";
h1El.textContent = "Welcome to my quiz!";
paragraphEl.textContent = "Here is a very short quiz to test your JavaScript knowledge. Try to answer each question as quickly and CORRECTLY, as you can! Each incorrect answer will cause you to lose points. Try your best to get first place on the Highscore board.";
buttonEl.textContent = "Start";
var sec = 30;
var topScores = [];


// appending of elements for the beginning page
body.appendChild(timerEl);
body.appendChild(infoEl);
infoEl.appendChild(h1El);
infoEl.appendChild(paragraphEl);
infoEl.appendChild(buttonEl);

//counter variable 
var counter = 0;


// Element attributes/CSS of the elements\
body.setAttribute("style", "");
timerEl.setAttribute("style", "text-align: right; font-size: 3vh;");
infoEl.setAttribute("style","border: #708D7F; border-style: solid; border-width: medium; width: 55vw; height: 40vh; margin: 6.2rem 15.5rem; background-color: #FFF; font-color: #708D7F;");
h1El.setAttribute("style", "margin: 0 12rem; font-size:3vh; color:darkgreen;");
paragraphEl.setAttribute("style", "color: darkgreen; font-size: 3vh;");
buttonEl.setAttribute("style", "margin: 0.8rem 15.5rem; padding: 0 0.5rem; border: #708D7F; border-style: solid; border-width: medium; border-radius:20px; font-size: 3vh; background-color: white;");
h2El.setAttribute("style", "font-size: 15vh; color:darkgreen;");

// resets the page when needed. 
function clear(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};


function returnHome() {
    body.appendChild(timerEl);
    body.appendChild(h1El);
    body.appendChild(infoEl);
    infoEl.appendChild(paragraphEl);
    infoEl.appendChild(buttonEl);
    window.prompt("Insert your initials here:")
    window.location.href="./leaderboard.html";
   

}
//draws forth a question from the variables below
function drawQuestion ()
    {
        const randomElement = questions[Math.floor(Math.random() * questions.length)];
   
        // text content for the elements
         h2El.textContent = randomElement.prompt;
         button1El.textContent = randomElement.choice1;
         button2El.textContent = randomElement.choice2;
         button3El.textContent = randomElement.choice3;
         button4El.textContent = randomElement.choice4;

        // appending the elements to the page
        body.appendChild(timerEl);
        body.appendChild(h2El);
        body.appendChild(button1El);
        body.appendChild(button2El);
        body.appendChild(button3El);
        body.appendChild(button4El);
        
        button1El.setAttribute("style", "display: block; margin: 0 auto; border:limegreen; border-style:solid; border-width:medium; border-radius: 10px; font-size: 55px; background-color:white;");
        button2El.setAttribute("style", "display: block; margin: 0 auto; border:limegreen; border-style:solid; border-width:medium; border-radius: 10px; font-size: 55px; background-color:white;");
        button3El.setAttribute("style", "display: block; margin: 0 auto; border:limegreen; border-style:solid; border-width:medium; border-radius: 10px; font-size: 55px; background-color:white;");
        button4El.setAttribute("style", "display: block; margin: 0 auto; border:limegreen; border-style:solid; border-width:medium; border-radius: 10px; font-size: 55px; background-color:white;");

            counter++;
            if (counter > 5) {
                clear(body);
               returnHome();
               return; 
            }
        button1El.onclick = function clickElement() { 
            if(randomElement.answer === 1 ) {
                window.alert("Correct!") 
            }
            else {
                window.alert("Incorrect.")
                sec = sec - 2
            }
            drawQuestion();
            
        }
        
        button2El.onclick = function clickElement() { 
            if(randomElement.answer === 2 ) {
                window.alert("Correct!") 
 
            }
            else {
                window.alert("Incorrect.")
                sec = sec - 2

            }
            drawQuestion();
        }
        button3El.onclick = function clickElement() { 
            if(randomElement.answer === 3 ) {
                window.alert("Correct!") 
 
            }
            else {
                window.alert("Incorrect.")
                sec = sec - 2

            }
            drawQuestion();
        }
        button4El.onclick = function clickElement() { 
            if(randomElement.answer === 4 ) {
                window.alert("Correct!") 
 
            }
            else {
                window.alert("Incorrect.")
                sec = sec - 2

            }
            drawQuestion();
        }
    }

// Starting the Quiz
buttonEl.onclick = function startQuiz() 
    {
        counter = 0;
        clear(body);
        drawQuestion();
        timer();

    };

 
// functional timer
function timer() {
    var stopwatch = setInterval(function() {
        timerEl.textContent='00:' + sec;
        sec--;
        if (sec < 0 || counter > 5) {
            clearTimeout(stopwatch);
        }
        if (sec < 0) {
            window.alert('Game Over!');
        }
    }, 1000)
}
 


var questions = [
    {
        prompt: "Which of the folowing is the correct syntax to redirect a url using JavaScript?",

        choice1: "A. window.location='http://www.newlocation.com'",
        choice2: "B. document location='http://www.newlocation.com'",
        choice3: "C. browser.location='http://newlocation.com'", 
        choice4: "D. navigator.location='http://newlocation.com'",
    
        answer: 1
    },

    {
        prompt: "Event handlers are a type of:",

        choice1: "A. Functions",
        choice2: "B. interface",
        choice3: "C. classes",
        choice4: "D. none of the above",
        
        answer: 1
    },

    {
        prompt: "___ specifies the property fo an event:",

        choice1: "A. name",
        choice2: "B. type",
        choice3: "C. value",
        choice4: "D. all of the above",

        answer: 2
    },

    {
        prompt: "How do you create a function in JavaScript?",

        choice1: "A. function + myFunction()",
        choice2: "B. function = myFunction()",
        choice3: "C. function myFunction()",
        choice4: "D. function:myFunction()",

        answer: 3
    },

    {
        prompt: "How do you find the number with the highest value of x and y?",

        choice1: "A. celi(x,y)",
        choice2: "B. top(x,y)",
        choice3: "C. Math.ceil(x,y)",
        choice4: "D. Math.max(x,y)",

        answer: 4
    }
]