$(document).ready(function(){

  //Generate a random choice for computer
  var choices = ["rock", "paper", "scissors"]

  //Get the value of users button click

  $(".btn-block").on("click", function(){
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

    } else if (userChoice === "rock" && choices[computerChoice]  === "scissor") {
      rockScissor();
      //alert("You win")
      RPS.gameState.userScore++;
      console.log(RPS.gameState.userScore);
      $("#userScore").html(RPS.gameState.userScore);
      $("#outcome").html("You win!");

    } else if (userChoice === "paper" && choices[computerChoice]  === "rock") {
      paperRock();
      //alert("You win")
      RPS.gameState.userScore++
      console.log(RPS.gameState.userScore);
      $("#userScore").html(RPS.gameState.userScore);
      $("#outcome").html("You win!");

    } else if (userChoice === "paper" && choices[computerChoice]  === "scissor") {
      paperScissor();
      //alert("Computer win")
      RPS.gameState.computerScore++;
      console.log(RPS.gameState.computerScore);
      $("#computerScore").html(RPS.gameState.computerScore);
      $("#outcome").html("Computer wins!");

    } else if (userChoice === "scissor" && choices[computerChoice]  === "rock") {
      scissorRock();
      //alert("Computer win")
      RPS.gameState.computerScore++
      console.log(RPS.gameState.computerScore);
      $("#computerScore").html(RPS.gameState.computerScore);
      $("#outcome").html("Computer wins!");

    } else if (userChoice === "scissor" && choices[computerChoice]  === "paper") {
      scissorPaper();
      //alert("You win")
      RPS.gameState.userScore++
      console.log(RPS.gameState.userScore);
      $("#userScore").html(RPS.gameState.userScore);
      $("#outcome").html("You win!");

    } else {
      //alert("Tie!")
      RPS.gameState.ties++;
      console.log(ties);
      $("#ties").html(RPS.gameState.ties);
      $("#outcome").html("Tie!");

    }

    RPS.gameState.roundCount++;
    $("#roundNumber").html(RPS.gameState.roundCount);
    console.log(RPS.gameState.roundCount);

  });

});