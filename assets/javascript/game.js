var wins = 0;
var losses = 0;
var chances = 12;
var alreadyGuessed = "";


var animeTitles = ["one piece", "attack on titan", "my hero academia", "gundam wing", "jojo", "bleach"]

var newTitle = animeTitles[Math.floor(Math.random() * animeTitles.length)];




var totalWins = document.getElementById("wins-text");
var totalLoses = document.getElementById("lost-text");
var wrongGuess = document.getElementById("alreadyGuessed-text");
var correctGuess = document.getElementById("correctGuessed-text");

// var hiddenText = [];
var hiddenTitle = [];
var underLine = [];

function newGame() {
    // var hiddenTitle = [];
    // var underLine = [];
    var chances = 12;
    var alreadyGuessed = "";

    var underScore = document.getElementById("underLine-text");
    var correctGuess = document.getElementById("correctGuessed-text");
    var newTitle = animeTitles[Math.floor(Math.random() * animeTitles.length)];


    for (let i = 0; i < newTitle.length; i++) {
        hiddenTitle.push(newTitle[i]);
    }

    for (let i = 0; i < newTitle.length; i++) {
        underLine.push("_");
    }


    correctGuess.textContent = hiddenTitle.join(' ');
    underScore.textContent = underLine.join(' ');

    // console.log(hiddenTitle);
    // console.log(underLine);

};



document.onkeyup = function (event) {
    // create a varible to store the amount of items in the hiddinTitle array
    var test = "a";

    var wrongGuess = document.getElementById("alreadyGuessed-text");
    var correctGuess = document.getElementById("correctGuessed-text");
    var totalWins = document.getElementById("wins-text");
    var totalLoses = document.getElementById("lost-text");
    var lives = document.getElementById("lives-text");
    var userGuess = event.key;

    //create a loop that will unhide keys that are guessed correctly

    //keep working on this logic 

    if ((userGuess === hiddenTitle[0]) || (userGuess === hiddenTitle[1])) {
        console.log("note it");

    } else {
        chances--;
        wrongGuess.textContent = "Already Guessed: " += userGuess;
        lives.textContent = "Guesses you have left: " + chances;
    }



};
