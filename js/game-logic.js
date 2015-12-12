$(document).ready(function(){

  //Generate a random choice for computer
  var choices = ["rock", "paper", "scissors"]

  //Get the value of users button click

  $(".btn-primary").on("click", function(){
    var userChoice = $(this).attr("data-choice");
    console.log(userChoice);
    var computerChoice = Math.floor(Math.random() * choices.length)
    console.log(choices[computerChoice]);

    //Logic behind wins

    if (userChoice === "rock" && choices[computerChoice]  === "paper") {
      rockPaper();
      //alert("Computer wins")
      RPS.gameState.computerScore++;
      console.log(RPS.gameState.computerScore);
      $("#computerScore").html(RPS.gameState.computerScore);
      $("#outcome").html("Computer wins!");

    } else if (userChoice === "rock" && choices[computerChoice]  === "scissors") {
      rockScissor();
      RPS.gameState.userScore++;
      console.log(RPS.gameState.userScore);
      $("#userScore").html(RPS.gameState.userScore);
      $("#outcome").html("You win!");

    } else if (userChoice === "paper" && choices[computerChoice]  === "rock") {
      paperRock();
      RPS.gameState.userScore++
      console.log(RPS.gameState.userScore);
      $("#userScore").html(RPS.gameState.userScore);
      $("#outcome").html("You win!");

    } else if (userChoice === "paper" && choices[computerChoice]  === "scissors") {
      paperScissor();
      RPS.gameState.computerScore++;
      console.log(RPS.gameState.computerScore);
      $("#computerScore").html(RPS.gameState.computerScore);
      $("#outcome").html("Computer wins!");

    } else if (userChoice === "scissors" && choices[computerChoice]  === "rock") {
      scissorRock();
      RPS.gameState.computerScore++
      console.log(RPS.gameState.computerScore);
      $("#computerScore").html(RPS.gameState.computerScore);
      $("#outcome").html("Computer wins!");

    } else if (userChoice === "scissors" && choices[computerChoice]  === "paper") {
      scissorPaper();
      RPS.gameState.userScore++
      console.log(RPS.gameState.userScore);
      $("#userScore").html(RPS.gameState.userScore);
      $("#outcome").html("You win!");

    } else if (userChoice === "rock" && choices[computerChoice]  === "rock") {
      rockRock();
      RPS.gameState.ties++;
      console.log(ties);
      $("#ties").html(RPS.gameState.ties);
      $("#outcome").html("Tie!");

    } else if (userChoice === "paper" && choices[computerChoice]  === "paper") {
      paperPaper();
      RPS.gameState.ties++;
      console.log(ties);
      $("#ties").html(RPS.gameState.ties);
      $("#outcome").html("Tie!");

    } else if (userChoice === "scissors" && choices[computerChoice]  === "scissors") {
      scissorScissor();
      RPS.gameState.ties++;
      console.log(ties);
      $("#ties").html(RPS.gameState.ties);
      $("#outcome").html("Tie!");

    }

    RPS.gameState.roundCount++;
    $("#roundNumber").html(RPS.gameState.roundCount);
    console.log(RPS.gameState.roundCount);

    if (RPS.gameState.roundCount === 10) {
      $("#outcome").html("Game over!")
        if (RPS.gameState.userScore > RPS.gameState.computerScore) {
          $("#outcome").append("<div>You won! Much honor!</div>")
        } else if (RPS.gameState.ties > RPS.gameState.computerScore && RPS.gameState.userScore) {
          $("#outcome").append("<div>No winners here.</div>")
        } else if (RPS.gameState.userScore < RPS.gameState.computerScore) {
          $("#outcome").append("<div>You lost. Great dishonor.</div>")
        } 

    $(".btn-primary").unbind();
    $("#reset-button").addClass("btn btn-danger btn-block").append("Play again!");
    $("#reset-button").on("click", function(){

    RPS.gameState.userScore = 0
    RPS.gameState.computerScore = 0
    RPS.gameState.ties = 0
    RPS.gameState.roundCount = 1

    $("#userScore").html(RPS.gameState.userScore);
    $("#computerScore").html(RPS.gameState.computerScore);
    $("#ties").html(RPS.gameState.ties);
    $("#roundNumber").html(RPS.gameState.roundCount);

    $(".btn-primary").bind();
    $("#outcome").remove();
    $("#reset-button").remove();

    });



    
    };

  });

});