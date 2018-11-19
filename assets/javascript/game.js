var wins = 0;
var losses = 0;
// var chances = 1000;
var alreadyGuessed = "";
var score = 0;
// var spaces = 0;
var goldenTicket = 1000;
var incorrect = [];

var animeTitles = ["one-piece", "attack-on-titan", "my-hero-academia", "gundam-wing", "cowboy-bebop", "bleach", "yu-yu-hakusho", "astro-boy",
    "dragonball-z", "hunter-x-hunter", "sword-art-online", "one-punch-man"
]

var newTitle = animeTitles[Math.floor(Math.random() * animeTitles.length)];

var totalWins = document.getElementById("wins-text");
var totalLoses = document.getElementById("lost-text");
var wrongGuess = document.getElementById("alreadyGuessed-text");
var correctGuess = document.getElementById("correctGuessed-text");

// var hiddenText = [];
var hiddenTitle = [];
var underLine = [];

function newGame() {
    score = 0;
    spaces = 0;
    chances = 12;

    hiddenTitle = [];
    underLine = [];
    incorrect = [];

    var totalWins = document.getElementById("wins-text");
    var totalLoses = document.getElementById("lost-text");
    var wrongGuess = document.getElementById("alreadyGuessed-text");
    var correctGuess = document.getElementById("correctGuessed-text");
    var lives = document.getElementById("lives-text");

    var underScore = document.getElementById("underLine-text");
    var correctGuess = document.getElementById("correctGuessed-text");


    var newTitle = animeTitles[Math.floor(Math.random() * animeTitles.length)];


    for (let i = 0; i < newTitle.length; i++) {
        hiddenTitle.push(newTitle[i]);
    }

    for (let i = 0; i < newTitle.length; i++) {
        if (newTitle[i] === "-") {
            underLine.push("-")
        } else {
            underLine.push("_");
        }
    }

    for (let k = 0; k < hiddenTitle.length; k++) {
        if (hiddenTitle[k] === "-") {
            spaces++;
        }
    }

    goldenTicket = hiddenTitle.length - spaces;

    wrongGuess.textContent = "";

    lives.textContent = "Guesses you have left: " + chances;

    correctGuess.textContent = hiddenTitle.join(' ');
    underScore.textContent = underLine.join(' ');

    
};



document.onkeyup = function (event) {

    function youWin() {
        newGame();
    }

    function youLoss() {
        newGame();
    }

    // Variable I need locally 

    var wrongGuess = document.getElementById("alreadyGuessed-text");
    var correctGuess = document.getElementById("correctGuessed-text");
    var totalWins = document.getElementById("wins-text");
    var totalLoses = document.getElementById("lost-text");
    var lives = document.getElementById("lives-text");
    var underScore = document.getElementById("underLine-text");

    var input = event.keyCode;

    if (input > 64 && input < 91) {
        var userGuess = event.key.toLowerCase();
    }


    // This loop determines if you guessed correctly

    for (let i = 0; i < hiddenTitle.length; i++) {
        if(userGuess === underLine[i]){
            score--;
        } 
        if (userGuess === hiddenTitle[i]) {
            underLine[i] = userGuess;
            console.log("groovy step 1");
            underScore.textContent = underLine.join(" ");
            score++;
        }
    }

    // Logic for if you guess incorrectly 

    for(let j = 0; j < 12; j++){
        // if((userGuess === incorrect[j]) || (userGuess === hiddenTitle[j])){
        //     chances++;
        //     incorrect[j] = "";
        // }
        if (!underLine.includes(userGuess) && incorrect.indexOf(userGuess) === -1 && hiddenTitle.length > 2) {
           
            console.log("nothing to see here");
            chances--; 
            incorrect.push(userGuess);
            wrongGuess.textContent = incorrect.join("");
            lives.textContent = "Guesses you have left: " + chances;
            // break;
        }
    } 
    
    // Logic for winning

    if (score === goldenTicket) {
        wins++;
        totalWins.textContent = "Wins: " + wins;
        setTimeout(youWin, 1500);
        goldenTicket = 1000;
    }

    // Logic for losing

    if (chances === 0) {
        underScore.textContent = hiddenTitle.join(" ");
        losses++;
        totalLoses.textContent = "Losses: " + losses;
        setTimeout(youLoss, 1500);
        goldenTicket = 1000;
    }


};



