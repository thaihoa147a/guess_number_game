+"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".number").textContent = "?";

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    //When there is no input
    if (!guess) {
        displayMessage("No Number🚫");
        //When player wins
    } else if (secretNumber === guess) {
        displayMessage("🎉Correct Number");

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";
        if (score > highscore) {
            document.querySelector(".highscore").textContent = score;
        }
        //When guess is too high or too low
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? " ⬆Too High" : " ⬇Too Low");
            score--;
            document.querySelector(".score").textContent = score;
        }
        // You lose
        else {
            displayMessage("😭You lost the game");
            document.querySelector("body").style.backgroundColor = "red";
            document.querySelector(".score").textContent = 0;
        }
        //When guess is too lows
    }

    // else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = ' ⬇Too Low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '😭You lost the game';
    //     document.querySelector('body').style.backgroundColor = 'red';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    displayMessage("Start guessing...");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
