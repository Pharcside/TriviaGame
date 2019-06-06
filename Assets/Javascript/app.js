// global variables
$(document).ready(function(){
//Global Variables 
var car = $("#quiz-area");
var countStartNumber = 30;
//Questions array with objects
var question = [
    {
      question: "What color was Pacman?",
      choices: ["red","blue","yellow","pink","black"],
      correctAnswer: "yellow",
      image: "<img src='Assets/images/Pacman.jpg'>"
    },

    {
      question: "What is it that Donkey Kong thorws?",
      choices: ["rocks","flowers","knifes","pipes","barrels"],
      correctAnswer: "barrels",
      image: "<img src='Assets/images/kong.jpg'>"
    },

    {
     question: "What happens to the Centipede if you shoot its body?",
     choices: ["destroys him","nothing","spilts in two","turns pink","turns into spider"],
     correctAnswer: "splits in two",
     image: "<img src='Assets/images/Cente.jpg'>"
    },

    {
    question: "What color is Q-bert?",
      choices: ["orange","blue","red","yellow","green"],
      correctAnswer: "orange",
      image: "<img src='Assets/images/qbert.jpg>"
      console.log(choices[2]),
    },

    {
    question: "?",
      choices: ["","","","",""],
      correctAnswer: "",
      image: "<img src='Assets/images/Invade.jpg>"
    },

]

var timer;
var game = {
  questions: question,
  currentQuestion: 0,
  counter: countStartTimer,
  correct: 0,
  incorrect: 0,
}

function countdown() {
  create a countdown function{
    * decrement counter
    * use jquery to put dynamically put logic onto the page
    * if statement
        * if time is up, run time up function
  
}

function loadQuestion(){
  * set timer 
  * timer = setInterval(game.countdown, 1000) 
  * dynamicatly add question into card variable
  * *hint* card.html ("<h2>" + "</h2>")
  * for loop to run through the* questions
  * a dynamically added buttons with answer options
}

function nextQuestion(){
  create a nextQuestion function
  * set the counter game.counter = countStartNumber
  * use jquery to change the text of the game counter
  * increment the currentQuestion by one
  * call the loadQuestion function 
}

function timeUp(){
  * clearInterval(timer)
  * use jquery to change the text of the game counter
  * dynamically add out of time to the card
  * append the Correct answer to the card
  * append image/gif to the card 
}

function results(){
  * clearInterval
  *  dynamically add html to let them know of         there results
  * use jquery to add html of game.counter to the     id of counter-number
  * add how many correct answers they got
  * add how many incorrect answer they got
  * add how many unanswered 
  * add a start over button
}

function clicked(){
  * clearInterval(timer)
  * if/ else statment for when an answer is clicked
  * if correct run answeredCorrectly() function
  * else run answeredIncorrectly() function  
}

function answerIncorrectly(){
  * add a point to the incorrect column
  * clearInterval(timer)
  * dynamically add html to let them know they are wrong
  * add the right answer
  * add the image 
  * if / else statment
  *if no more question wait three seconds then show result
  *else wait three seconds and show next question 
}

function answeredCorrectly(){
  * add a point to correct column
  * clearInterval(timer);
  * dynamically add html to let them know they are    correct
  * add image
  * if / else statment
  *if no more question wait three seconds then show result
  *else wait three seconds and show next question
}

function reset(){

}

//start button
$(document).on("click", "#start", function() {
$("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
game.loadQuestion();
});

//answer button
$(document).on("click", ".answer-button", function(e) {
game.clicked(e);
});

//start over button  
$(document).on("click", "#start-over", function() {
game.reset();
});


}

