var wins = 0;
var losses = 0;
var chances = 12;
var alreadyGuessed = "";


var animeTitles = [ "one piece", "attack on titan", "my hero academia", "gundam wing", "jojo", "bleach" ]
var hiddenTitle = [];

var newTitle = animeTitles[Math.floor(Math.random() * animeTitles.length)];




var totalWins = document.getElementById("wins-text"); 
var totalLoses = document.getElementById("lost-text");
var wrongGuess = document.getElementById("alreadyGuessed-text");
var correctGuess = document.getElementById("correctGuessed-text");
var hiddenText = [];

function newGame(){
    var correctGuess = document.getElementById("correctGuessed-text");
    var newTitle = animeTitles[Math.floor(Math.random() * animeTitles.length)];
    correctGuess.textContent = newTitle;
    var wins = 0;
    var losses = 0;
    var chances = 12;
    var alreadyGuessed = "";

    //All of this is added to see if i can get the show word ppart working
    for(){
        
    }
};

document.onkeyup = function(event) {

    var wrongGuess = document.getElementById("alreadyGuessed-text");
    var correctGuess = document.getElementById("correctGuessed-text");
    var totalWins = document.getElementById("wins-text"); 
    var totalLoses = document.getElementById("lost-text");

    var userGuess = event.key;

    if(userGuess === hiddenText){

    }

    for(let i = 0; i < newTitle.length; i++){
        // I replaced newTitle[i] with newTitle[_]
        hiddenTitle.push(newTitle[i]);
        console.log(hiddenTitle);
    }

  };
