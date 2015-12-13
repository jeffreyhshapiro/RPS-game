  //Generate a random choice for computer
  var choices = ["rock", "paper", "scissors"];

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

  $(document).on("click", "#reset-button", function(){
      restoreDefault();
    })

function gameLogic(userChoice, computerChoice){

      //Logic behind wins

      if (userChoice === "rock" && choices[computerChoice]  === "paper") {
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

    if (RPS.gameState.roundCount === 10) {
      $("#outcome").html("Game over.");
        if (RPS.gameState.userScore > RPS.gameState.computerScore) {
          $("#outcome").append(" You won! Much honor!");
        } else if (RPS.gameState.ties > RPS.gameState.computerScore && RPS.gameState.userScore) {
          $("#outcome").append(" No winners here.");
        } else if (RPS.gameState.userScore < RPS.gameState.computerScore) {
          $("#outcome").append(" You lost. Great dishonor.");
        }

    $(".btn-primary").unbind();
    $(".btn-primary").hide();
    $("#reset-button").addClass("btn btn-danger btn-block").append("Play again!");
    $("#reset-button").show();
    
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
