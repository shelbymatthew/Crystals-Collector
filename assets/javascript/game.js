
//Creating global variables
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var playerTotal = 0;
var computerGuess;
var wins = 0;
var losses = 0;

//Calling generateNumbers fucntion to start the game
generateNumbers();

//Receiving player input, adding the number assoiasiated with the crystal clicked, and running the checkWin funciton
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

//function generates numbers for the start of the game, and inserts the computer guess for the user to see.
function generateNumbers(){
    crystalOne = Math.floor(Math.random()*12 + 1);
    crystalTwo = Math.floor(Math.random()*12 + 1);
    crystalThree = Math.floor(Math.random()*12 + 1);
    crystalFour = Math.floor(Math.random()*12 + 1);
    computerGuess = Math.floor(Math.random()*100 + 19);
    $("#computerGuess").text(computerGuess);
    }
//Resets game
function resetGame(){
    generateNumbers();
    playerTotal = 0;
    $("#computerGuess").text(computerGuess);
    $("#playerScore").text(playerTotal);
}
//Checks for a win, lose, or to keep playing. Resets game when a win or loss happens.
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