var wins = 0;
var losses = 0;
var chances = 12;
var alreadyGuessed = "";


var animeTitles = [ "one piece", "attack on titan", "my hero academia", "gundam wing", "jojo", "bleach" ]

var newTitle = animeTitles[Math.floor(Math.random() * animeTitles.length)];




var totalWins = document.getElementById("wins-text"); 
var totalLoses = document.getElementById("lost-text");
var wrongGuess = document.getElementById("alreadyGuessed-text");
var correctGuess = document.getElementById("correctGuessed-text");

var hiddenText = [];

function newGame(){
    var hiddenTitle = [];
    var underLine = [];
    
    var underScore = document.getElementById("underLine-text");
    var correctGuess = document.getElementById("correctGuessed-text");
    var newTitle = animeTitles[Math.floor(Math.random() * animeTitles.length)];
    var chances = 12;
    var alreadyGuessed = "";

    for(let i = 0; i < newTitle.length; i++){
            // I replaced newTitle[i] with newTitle[_]
            hiddenTitle.push(newTitle[i]);
            
        }

    for(let i = 0; i < newTitle.length; i++){
            // I replaced newTitle[i] with newTitle[_]
            underLine.push("_");
        }
    
        // underLine.join('');

    correctGuess.textContent = hiddenTitle.join(' ');
    underScore.textContent = underLine.join(' ');
    console.log(hiddenTitle);
    console.log(underLine);

    
};

document.onkeyup = function(event) {

    var wrongGuess = document.getElementById("alreadyGuessed-text");
    var correctGuess = document.getElementById("correctGuessed-text");
    var totalWins = document.getElementById("wins-text"); 
    var totalLoses = document.getElementById("lost-text");

    var userGuess = event.key;

    if(userGuess == newTitle) {
        console.log("note it");
    }

    // for(let i = 0; i < newTitle.length; i++){
    //     // I replaced newTitle[i] with newTitle[_]
    //     hiddenTitle.push(newTitle[i]);
        
    // }
    // console.log(hiddenTitle);
  };
