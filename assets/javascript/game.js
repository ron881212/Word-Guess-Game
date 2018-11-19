// Variables needed in Global scope

var wins = 0;
var losses = 0;
var alreadyGuessed = "";
var score = 0;
var chances = 12;
var goldenTicket = 1000;
var incorrect = [];

// Array withh amine titles

var animeTitles = ["one-piece", "attack-on-titan", "my-hero-academia", "gundam-wing", "cowboy-bebop", "bleach", "yu-yu-hakusho", "dragonball-z", "hunter-x-hunter", "sword-art-online", "one-punch-man"]

// Calling for random anime from animeTitles array

var newTitle = animeTitles[Math.floor(Math.random() * animeTitles.length)];

// Html elements that need to be in Global scope

var totalWins = document.getElementById("wins-text");
var totalLoses = document.getElementById("lost-text");
var wrongGuess = document.getElementById("alreadyGuessed-text");
var correctGuess = document.getElementById("correctGuessed-text");
var backgroundPic = document.getElementsByTagName("body");

// Empty arrays needed to push underlines at the bottom letters from chosen anime into its own array

var hiddenTitle = [];
var underLine = [];

// Global win/Lose function needed to add timeout before picking new random anime

function youWin() {
    newGame();
}
function youLoss() {
    newGame();
}

// I quit function written for I give up button

function iGiveUp() {
    var underScore = document.getElementById("underLine-text");
    underScore.textContent = hiddenTitle.join(" ");
    losses++;
    var totalLoses = document.getElementById("lost-text");
    totalLoses.textContent = "Losses: " + losses;
    setTimeout(youLoss, 1500);
    goldenTicket = 1000;
    // stopHint();
}

// Hint button will play song from anime title lower opacity and change background image

function playHint() {
    if(hiddenTitle.join("") === animeTitles[0]){
        document.body.style.backgroundImage = "url('../assets/images/one-piece.jpg')";
        document.body.style.opacity = "0.70";
        var theme1 = document.getElementById("onePiece"); 
        theme1.play();
    }  
    if(hiddenTitle.join("") === animeTitles[1]){    
        document.body.style.backgroundImage = "url('../assets/images/AOT.jpg')";
        document.body.style.opacity = "0.70";
        var theme2 = document.getElementById("attack"); 
        theme2.play();
    }  
    if(hiddenTitle.join("") === animeTitles[2]){
        document.body.style.backgroundImage = "url('../assets/images/MHA.jpg')";
        document.body.style.opacity = "0.70";
        var theme3 = document.getElementById("hero"); 
        theme3.play();
    }  
    if(hiddenTitle.join("") === animeTitles[3]){
        document.body.style.backgroundImage = "url('../assets/images/GS.png')";
        document.body.style.opacity = "0.70";
        var theme4 = document.getElementById("gundam"); 
        theme4.play();
    }  
    if(hiddenTitle.join("") === animeTitles[4]){
        document.body.style.backgroundImage = "url('../assets/images/CBBB.jpg')";
        document.body.style.opacity = "0.70";
        var theme5 = document.getElementById("cowboy"); 
        theme5.play();
    }  
    if(hiddenTitle.join("") === animeTitles[5]){
        document.body.style.backgroundImage = "url('../assets/images/Bleach.jpeg')";
        document.body.style.opacity = "0.70";
        var theme6 = document.getElementById("bleach"); 
        theme6.play();
    }  
    if(hiddenTitle.join("") === animeTitles[6]){
        document.body.style.backgroundImage = "url('../assets/images/YYH.jpg')";
        document.body.style.opacity = "0.70";
        var theme7 = document.getElementById("YuYu"); 
        theme7.play();
    }  
    if(hiddenTitle.join("") === animeTitles[7]){
        document.body.style.backgroundImage = "url('../assets/images/DBZ.jpg')";
        document.body.style.opacity = "0.70";
        var theme8 = document.getElementById("DBZ"); 
        theme8.play();
    }  
    if(hiddenTitle.join("") === animeTitles[8]){
        document.body.style.backgroundImage = "url('../assets/images/HH.jpg')";
        document.body.style.opacity = "0.70";
        var theme9 = document.getElementById("hunterx"); 
        theme9.play();
    }  
    if(hiddenTitle.join("") === animeTitles[9]){
        document.body.style.backgroundImage = "url('../assets/images/SAO.png')";
        document.body.style.opacity = "0.70";
        var theme10 = document.getElementById("sword"); 
        theme10.play();
    }  
    if(hiddenTitle.join("") === animeTitles[10]){
        document.body.style.backgroundImage = "url('../assets/images/OPM.jpg')";
        document.body.style.opacity = "0.70";
        var theme11 = document.getElementById("punch"); 
        theme11.play();
    }  
}

// function stopHint(){
//     document.body.style.backgroundImage = "url('../assets/images/default-background.jpg')";
//     document.body.style.opacity = "1";
//     var stopTheme1 = document.getElementById("onePiece");
//     stopTheme1.pause();
//     var stopTheme2 = document.getElementById("attack");
//     stopTheme2.pause();
//     var stopTheme3 = document.getElementById("hero");
//     stopTheme3.pause();
//     var stopTheme4 = document.getElementById("gundam");
//     stopTheme4.pause();
//     var stopTheme5 = document.getElementById("cowboy");
//     stopTheme5.pause();
//     var stopTheme6 = document.getElementById("bleach");
//     stopTheme6.pause();
//     var stopTheme7 = document.getElementById("YuYu");
//     stopTheme7.pause();
//     var stopTheme8 = document.getElementById("DBZ");
//     stopTheme8.pause();
//     var stopTheme9 = document.getElementById("hunterx");
//     stopTheme9.pause();
//     var stopTheme10 = document.getElementById("sword");
//     stopTheme10.pause();
//     var stopTheme11 = document.getElementById("punch");
//     stopTheme11.pause();
   
// }

// This runs everytime the new game button is clicked

function newGame() {

    // stopHint();
    
    document.body.style.backgroundImage = "url('../assets/images/default-background.jpg')";
    document.body.style.opacity = "1";

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

    // I quit function written for I give up button

    function iGiveUp() {
        underScore.textContent = hiddenTitle.join(" ");
        losses++;
        totalLoses.textContent = "Losses: " + losses;
        setTimeout(youLoss, 1500);
        goldenTicket = 1000;
    }
};



document.onkeyup = function (event) {

    // Global win/Lose function needed to add timeout before picking new random anime 

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

    // This allows users to only pick lowercase letters and only a-z keys

    var input = event.keyCode;
    if (input > 64 && input < 91) {
        var userGuess = event.key.toLowerCase();
    }

    // This loop determines if you guessed correctly

    for (let i = 0; i < hiddenTitle.length; i++) {
        if (userGuess === underLine[i]) {
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

    for (let j = 0; j < 12; j++) {
        if (!underLine.includes(userGuess) && incorrect.indexOf(userGuess) === -1 && hiddenTitle.length > 2) {
            console.log("nothing to see here");
            chances--;
            incorrect.push(userGuess);
            wrongGuess.textContent = incorrect.join("");
            lives.textContent = "Guesses you have left: " + chances;
        }
    }

    // Logic for winning

    if (score === goldenTicket) {
        wins++;
        totalWins.textContent = "Wins: " + wins;
        setTimeout(youWin, 1000);
        goldenTicket = 1000;
    }

    // Logic for losing

    if (chances === 0) {
        underScore.textContent = hiddenTitle.join(" ");
        losses++;
        totalLoses.textContent = "Losses: " + losses;
        setTimeout(youLoss, 1000);
        goldenTicket = 1000;
    }



};
