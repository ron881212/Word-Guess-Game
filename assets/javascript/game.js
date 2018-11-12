var wins = 0;
var losses = 0;
var chances;
var alreadyGuessed = "";

var animeTitles = [ "one piece", "attack on titan", "my hero academia", "gundam wing", "jojo", "bleach" ]

var newTitle = animeTitles[Math.floor(Math.random() * animeTitles.length)];

var wrongGuess = document.getElementById("alreadyGuessed-text");
var correctGuess = document.getElementById("correctGuessed-text");
var totalWins = document.getElementById("wins-text"); 
var totalLoses = document.getElementById("lost-text");

document.onkeyup = function(event) {

    var wrongGuess = document.getElementById("alreadyGuessed-text");
    var correctGuess = document.getElementById("correctGuessed-text");
    var totalWins = document.getElementById("wins-text"); 
    var totalLoses = document.getElementById("lost-text");

    var userGuess = event.key;

    var newTitle = animeTitles[Math.floor(Math.random() * animeTitles.length)];

    correctGuess.textContent = newTitle;
    console.log("made it");

    // Write code that will reveal the correct letter or that will place it in the already guess section.

      // Output to the html wins, losses, aready-guessed and chances left
      userChoiceText.textContent = "Already Guessed: " + userGuess;
      winsText.textContent = "wins: " + wins;
      lossesText.textContent = "losses: " + losses;
    

  };