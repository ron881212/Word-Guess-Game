var wins = 0;
var losses = 1;
var chances = 1000;
var alreadyGuessed = "";
var score = 0;
var spaces = 0;
var goldenTicket = 1000;


var animeTitles = ["one-piece", "attack-on-titan", "my-hero-academia", "gundam-wing", "jojo", "bleach"]

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

    function youWin(){
        newGame();
    }

    function youLoss(){
        newGame();
    }

    // This variable is the score needed to win

    // var goldenTicket = hiddenTitle.length - spaces;

    // Variable I need locally 

    var wrongGuess = document.getElementById("alreadyGuessed-text");
    var correctGuess = document.getElementById("correctGuessed-text");
    var totalWins = document.getElementById("wins-text");
    var totalLoses = document.getElementById("lost-text");
    var lives = document.getElementById("lives-text");
    var underScore = document.getElementById("underLine-text");

    var input = event.keyCode;

    if(input > 64 && input < 91){
        var userGuess = event.key.toLowerCase();
    }

    // This loop determines if you guessed correctly

    for (let i = 0; i < hiddenTitle.length; i++) {
        if (userGuess === hiddenTitle[i]) {
            underLine[i] = userGuess;
            console.log("groovy");
            score++;
            underScore.textContent = underLine.join(" ");
        } 
    }

    // Logic for winning
    
        if (score === goldenTicket){
            wins++;
            totalWins.textContent = "Wins: " + wins;  
            setTimeout(youWin, 500); 
            console.log("im the problem");
            goldenTicket = 1000;
        }
    

    // Logic for if you guess incorrectly 

        if (hiddenTitle.length > 2) {
            if ((userGuess !== hiddenTitle[0]) && (userGuess !== hiddenTitle[1]) && (userGuess !== hiddenTitle[2]) && (userGuess !== hiddenTitle[3]) &&
                (userGuess !== hiddenTitle[4]) && (userGuess !== hiddenTitle[5]) && (userGuess !== hiddenTitle[6]) && (userGuess !== hiddenTitle[7]) &&
                (userGuess !== hiddenTitle[8]) && (userGuess !== hiddenTitle[9]) && (userGuess !== hiddenTitle[10]) && (userGuess !== hiddenTitle[11]) &&
                (userGuess !== hiddenTitle[12]) && (userGuess !== hiddenTitle[13]) && (userGuess !== hiddenTitle[14]) && (userGuess !== hiddenTitle[15]) &&
                (userGuess !== hiddenTitle[16]) && (userGuess !== hiddenTitle[17]) && (userGuess !== hiddenTitle[18]) && (userGuess !== hiddenTitle[19])){
                
                console.log("nothing to see here");
                chances--;
                wrongGuess.textContent += userGuess;
                lives.textContent = "Guesses you have left: " + chances;
            }
        }

    // Logic for losing

    if (chances === 0) {
        losses++;
        totalLoses.textContent = "Losses: " + losses;
        setTimeout(youLoss, 500);
        console.log("no im the problem");
        goldenTicket = 1000;
    }
    

};
