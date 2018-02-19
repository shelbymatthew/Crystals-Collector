//Global Variables
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var playerTotal = 0;
var computerGuess;
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
    $("#computerGuess").html=(computerGuess);
    playerTotal = 0;
    if (computerGuess === playerTotal){
        alert("win");
        } else if (computerGuess < playerTotal){
            alert("lose");
        }


    //tests
    console.log(crystalOne)
    console.log(crystalTwo)
    console.log(crystalThree)
    console.log(crystalFour)
    console.log(computerGuess)
    



// function playerGuess(){
    $("#computerGuess").text(computerGuess);
    // $("#wins").text(wins);
    // $("#losses").text(losses);
    $("#crystalOne").on("click", function() {
        playerTotal = crystalOne + playerTotal;
        console.log("pt?" + playerTotal);
        $("#totalScore").text(playerTotal);
        if (computerGuess == playerTotal){
            alert("win");
            wins++;
            $("#wins").text("Wins: " + wins);
            startGame();
            } else if (computerGuess < playerTotal){
                alert("lose");
                losses++;
                $("#losses").text("Losses: " + losses);
                startGame();
            }
    });
        $("#crystalTwo").on("click", function() {
        playerTotal = crystalTwo + playerTotal;
        console.log("pt?" + playerTotal);
        $("#totalScore").text(playerTotal);
        if (computerGuess == playerTotal){
            alert("win");
            } else if (computerGuess < playerTotal){
                alert("lose");
            }
    });
        $("#crystalThree").on("click", function() {
        playerTotal = crystalThree + playerTotal;
        console.log("pt?" + playerTotal);
        $("#totalScore").text(playerTotal);
        if (computerGuess == playerTotal){
            alert("win");
            } else if (computerGuess < playerTotal){
                alert("lose");
            }
    });
        $("#crystalFour").on("click", function() {
        playerTotal = crystalFour + playerTotal;
        console.log("pt?" + playerTotal);
        $("#totalScore").text(playerTotal);
        if (computerGuess == playerTotal){
            alert("win");
            } else if (computerGuess < playerTotal){
                alert("lose");
            }
   });
//    if (computerGuess == playerTotal){
//     alert("win");
//     } else if (computerGuess < playerTotal){
//         alert("lose");
    // }
}

// }

//Game logic
startGame();
// playerGuess();





// if (playerTotal == computerGuess){
//     alert("win");
//     } else if (playerTotal > computerGuess){
//         alert("lose");
//     }




 //     if($("#crystalOne").on("click"), function()){
    //     playerTotal = crystalOne + playerTotal;
    //     console.log("pt?" + playerTotal)
    // } else if (crystalTwo = true){
    //     playerTotal = crystalTwo + playerTotal;
    // } else if (crystalThree){
    //     playerTotal = crystalThree + playerTotal;
    // } else if (crystalFour){
    //     playerTotal = crystalFour + playerTotal;
    // }