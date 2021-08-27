"use strict";

// This is used to select an html component
// document.querySelector();

// This is used to get a value from like maybe an input field.
// document.querySelector(".guess").value;

// This is used to change a text in the html
// document.querySelector('.message').textContent = 'Correct Number!';

// This is used to perform operation
// document.querySelector('html_component').addEventListener('name', function());

//this is used to manipulate as style element
//document.querySelector("body").style.backgroundColor = "#60b347";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When guess has no value
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  }

  //When guess is from 1 to 20
  else if (guess >= 1 && guess <= 20) {
    //If score != 0
    if (score > 1) {
      //When guess is equals to random number
      if (guess === randomNumber) {
        document.querySelector(".message").textContent = "Correct Number!";
        document.querySelector(".number").textContent = randomNumber;
        score++;
        document.querySelector(".score").textContent = score;
        if (score > highScore) {
          highScore = score;
          document.querySelector(".highscore").textContent = highScore;
        }
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "20rem";
      }

      //When guess is greater than random number
      else if (guess > randomNumber) {
        document.querySelector(".message").textContent = "Too High!";
        score--;
        document.querySelector(".score").textContent = score;
      }

      //When guess is less than random number
      else {
        document.querySelector(".message").textContent = "Too Low!";
        score--;
        document.querySelector(".score").textContent = score;
      }
    }

    //if score = 0
    else {
      document.querySelector(".title").textContent = "Game Over";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }

  //When guess is grater than 20 and less than 1
  else {
    document.querySelector(".message").textContent =
      "Choose a number between 1 and 20...";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".title").textContent = "Guess My Number?";
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "10rem";
});
