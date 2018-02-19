

var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var playerTotal = 0;
var computerGuess;
var wins = 0;
var losses = 0;

generateNumbers();

$("#computerGuess").text(computerGuess);

$(".crystal").on("click", function () {
   switch (this.id){

           case 'crystalOne': playerTotal = crystalOne + playerTotal;
           checkWin();
           break;
       
           case 'crystalTwo': playerTotal = crystalTwo + playerTotal;
           checkWin();
           break;

           case 'crystalThree': playerTotal = crystalThree + playerTotal;
           checkWin();
           break;

           case 'crystalFour': playerTotal = crystalFour+ playerTotal;
           checkWin();
           break;
}
});

if (computerGuess == playerTotal){
    alert("win!")
} else if (computerGuess < playerTotal){
    alert("lose!");
}

function generateNumbers(){
    crystalOne = Math.floor(Math.random()*12 + 1);
    crystalTwo = Math.floor(Math.random()*12 + 1);
    crystalThree = Math.floor(Math.random()*12 + 1);
    crystalFour = Math.floor(Math.random()*12 + 1);
    computerGuess = Math.floor(Math.random()*100 + 19);
    }

function resetGame(){
    generateNumbers();
    playerTotal = 0;
    $("#computerGuess").text(computerGuess);
    $("#playerScore").text(playerTotal);
}

function checkWin(){
    if (computerGuess == playerTotal){
        alert("win!");
        wins++;
        $("#wins").text("Wins: " + wins);
        resetGame();
    } else if (computerGuess < playerTotal){
        alert("lose!");
        losses++;
        $("#losses").text("Losses: " + losses);
        resetGame();
    } else {
        $("#playerScore").text(playerTotal);
    }
}