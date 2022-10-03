var readlineSync = require("readline-sync");

var score = 0

console.log("Hello! ");
var userName = readlineSync.question("What's your name? ")
console.log();
console.log("Welcome " + userName);

console.log("Lets's play a fun short quiz to see how well do you know me.")
console.log("(Type only the options, example a,b,c,or d and press enter.)");
console.log();

console.log("Let's start the game!")

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer === answer) {
    console.log("right!")
    score = score + 1
  } else {
    console.log("Wrong!")
  }

  console.log("current score: ", score)
  console.log("--------")
}

var questions = [{
  question: "1.Where do I live? a. Bangalore b. Chennai ",
  answer: "a"
}, {
  question: "2.My favorite 2022 Indian movie? a. Vikram  b. Brahmāstra: Part One – Shiva c. RRR ",
  answer: "c"
},
{
  question: "3.My favorite place to holiday in India a. Pondicherry b. Goa c. Kerala? ",
  answer: "b"
},
{
  question: "4.Which is my favorite food? a.Biriyani b.Pizza c. Pasta d. South Indian meal ",
  answer: "a"
},
{
  question: "5.Which is my birth month? a. January b. May c. September d. December ",
  answer: "a"
}

]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}


console.log("Thank you for playing the game, You Scored: ", score)