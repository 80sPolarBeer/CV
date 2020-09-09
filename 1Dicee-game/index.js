var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var score = document.getElementById("score");


function diceRoll() {

    var list = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

    var choice1 = Math.floor(Math.random() * 6);
    var choice2 = Math.floor(Math.random() * 6);

    dice1.setAttribute("src", list[choice1]);
    dice2.setAttribute("src", list[choice2]);

    if (choice1 == choice2) {
        score.innerText = "🚩Draw🚩";
    }
    else if (choice1 > choice2) {
        score.innerText = "🚩Player 1 wins";
    }
    else if(choice2 > choice1) {
        score.innerText = "Player 2 wins🚩";
    }

}

