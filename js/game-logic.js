  //Generate a random choice for computer
  var choices = ["rock", "paper", "scissors"];

  //var for endgame issue

  var gameEnd = $(this).attr("data-reset");

 //Get the value of users button click
  function bindControls(){
    $(".btn-primary").on("click", function(){
      var userChoice = $(this).attr("data-choice");
      console.log(userChoice);
      var computerChoice = Math.floor(Math.random() * choices.length);
      console.log(choices[computerChoice]);
      gameLogic(userChoice, computerChoice);
    });
  }
  
  bindControls();

  $("#reset-button").on("click", function(){
      restoreDefault();
      RPS.gameState.totalGamesPlayed++
      console.log(RPS.gameState.totalGamesPlayed);
    });

  $("#end-game").on("click", function(){
    endGame();
    $("#end-game").empty().hide();
  });

function gameLogic(userChoice, computerChoice){

      //Logic behind wins

      if (userChoice === "rock" && choices[computerChoice]  === "paper") {
        //computerThinking();
        rockPaper();
        computerWin();
      } else if (userChoice === "rock" && choices[computerChoice]  === "scissors") {
        rockScissor();
        userWin();
      } else if (userChoice === "paper" && choices[computerChoice]  === "rock") {
        paperRock();
        userWin();
      } else if (userChoice === "paper" && choices[computerChoice]  === "scissors") {
        paperScissor();
        computerWin();
      } else if (userChoice === "scissors" && choices[computerChoice]  === "rock") {
        scissorRock();
        computerWin();
      } else if (userChoice === "scissors" && choices[computerChoice]  === "paper") {
        scissorPaper();
        userWin();
      } else if (userChoice === "rock" && choices[computerChoice]  === "rock") {
        rockRock();
        tie();
      } else if (userChoice === "paper" && choices[computerChoice]  === "paper") {
        paperPaper();
        tie();
      } else if (userChoice === "scissors" && choices[computerChoice]  === "scissors") {
        scissorScissor();
        tie();
      }

      roundIncrement();

    if (RPS.gameState.roundCount === 5) {
      $("#outcome").html("Game over.");
        if (RPS.gameState.userScore > RPS.gameState.computerScore) {
          $("#outcome").append(" You won! Much honor!");
          RPS.gameState.totalUserWins++
          console.log(RPS.gameState.totalUserWins);
        } else if (RPS.gameState.ties > RPS.gameState.computerScore && RPS.gameState.userScore) {
          $("#outcome").append(" No winners here.");
          RPS.gameState.totalTies++
          console.log(RPS.gameState.totalTies);
        } else if (RPS.gameState.userScore < RPS.gameState.computerScore) {
          $("#outcome").append(" You lost. Great dishonor.");
          RPS.gameState.totalComputerWins++
          console.log(RPS.gameState.totalComputerWins);
        }

    $(".btn-primary").unbind();
    $(".btn-primary").hide();
    $("#reset-button").addClass("btn btn-danger btn-block").append("Play again!");
    $("#reset-button").show();
    };
    //After playing three games, the user has the option of ending the game completely but can continue playing to their hearts content

    if (RPS.gameState.totalUserWins + RPS.gameState.totalComputerWins + RPS.gameState.totalTies == 5) {
      $("#reset-button").empty().hide();
      $("#end-game").addClass("btn btn-success btn-block").append("The time has come to gracefully bow out");
    }
}; 


//Functions for win type

function userWin(){
  RPS.gameState.userScore++;
  console.log(RPS.gameState.userScore);
  $("#userScore").html(RPS.gameState.userScore);
  $("#outcome").html("You win!");
};

function computerWin(){
  RPS.gameState.computerScore++;
  console.log(RPS.gameState.computerScore);
  $("#computerScore").html(RPS.gameState.computerScore);
  $("#outcome").html("Computer wins!");
};

function tie(){
  RPS.gameState.ties++;
  console.log(ties);
  $("#ties").html(RPS.gameState.ties);
  $("#outcome").html("Tie!");
};

function roundIncrement() {
  RPS.gameState.roundCount++;
  $("#roundNumber").html(RPS.gameState.roundCount);
  console.log(RPS.gameState.roundCount);
};

//Restore default settings after game play

function restoreDefault(){
  restoreDefaultScores();
  lizardLizard();
  $("#outcome").empty();
  $("#reset-button").empty().hide();
  $(".btn-primary").bind();
  $(".btn-primary").show();
  bindControls();
};

//Restore default scores to original values

function restoreDefaultScores(){
  RPS.gameState.userScore = 0;
  RPS.gameState.computerScore = 0;
  RPS.gameState.ties = 0;
  RPS.gameState.roundCount = 0;
  $("#userScore").html(RPS.gameState.userScore);
  $("#computerScore").html(RPS.gameState.computerScore);
  $("#ties").html(RPS.gameState.ties);
  $("#roundNumber").html(RPS.gameState.roundCount);
};

function endGame(){
  $("#end-game-modal").modal();
  lizardLizard();
  $("#outcome").empty();
  $("#reset-button").empty().hide();
  $("#end-game").empty().hide();
  if (RPS.gameState.totalUserWins > RPS.gameState.totalComputerWins) {
    $("#final-stats").append("Congratulations, you won!  You won " +RPS.gameState.totalUserWins+ " games, and the computer won " +RPS.gameState.totalComputerWins+ " games.  Skynet remains at bay.")
  } else if (RPS.gameState.totalUserWins < RPS.gameState.totalComputerWins) {
    $("#final-stats").append("I regret to report that you lost.  Skynet won " +RPS.gameState.totalComputerWins+ " games and you won " +RPS.gameState.totalUserWins+ " games.  You should make sure your computer is protected before the advent of the machines.")
  };
};

$("#modal-close").on("click", function(){
  $("#outcome").html("Thank you for playing!");
});