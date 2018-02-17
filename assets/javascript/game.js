//Global Variables
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var playerTotal = 0;
var computerGuess = 0;
var wins = 0;
var losses = 0;



//When the game starts, the computer generates a number beween 19- 120. Also, random numbers should be gererated for all 4 crystals, between 1-12. These numbers should remain constant for the length of the game.

//When a player clicks a crystal, the number assigned to that crystal should be added to player total. Player total should be compared to computerguess. if it is equal less than, keep playing, equal to win, and greater than lose

//Functions
function startGame(){
    crystalOne = Math.floor(Math.random()*12 + 1);
    crystalTwo = Math.floor(Math.random()*12 + 1);
    crystalThree = Math.floor(Math.random()*12 + 1);
    crystalFour = Math.floor(Math.random()*12 + 1);
    computerGuess = Math.floor(Math.random()*119 + 1);


    //tests
    console.log(crystalOne)
    console.log(crystalTwo)
    console.log(crystalThree)
    console.log(crystalFour)
    console.log(computerGuess)
    

}

function playerGuess(){

}

//Game logic
startGame()

