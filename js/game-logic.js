$(document).ready(function(){

  //Set counter to beginning variables

  /*var gameState = {
    "userScore":0, 
    "computerScore":0, 
    "ties":0, 
    "roundCount":1
  }*/

  //Generate a random choice for computer
  var choices = ["rock", "paper", "scissor"]

  //Get the value of users button click

  $(".btn-block").on("click", function(){
    var userChoice = $(this).attr("data-choice");
    console.log(userChoice);
    var computerChoice = Math.floor(Math.random() * choices.length)
    console.log(choices[computerChoice]);
    var tagName = $(this).data("type");

    //Logic behind wins

    if (userChoice === "rock" && choices[computerChoice]  === "paper") {
      alert("Computer wins")
      //computerScore++
      RPS.gameState.computerScore++;
      console.log(RPS.gameState.computerScore);
      $("#computerScore").html(RPS.gameState.computerScore);

    } else if (userChoice === "rock" && choices[computerChoice]  === "scissor") {
      alert("You win")
      //userScore++
      RPS.gameState.userScore++;
      console.log(RPS.gameState.userScore);
      $("#userScore").html(RPS.gameState.userScore);

    } else if (userChoice === "paper" && choices[computerChoice]  === "rock") {
      alert("You win")
      //userScore++
      RPS.gameState.userScore++
      console.log(RPS.gameState.userScore);
      $("#userScore").html(RPS.gameState.userScore);

    } else if (userChoice === "paper" && choices[computerChoice]  === "scissor") {
      alert("Computer win")
      //computerScore++
      RPS.gameState.computerScore++;
      console.log(RPS.gameState.computerScore);
      $("#computerScore").html(RPS.gameState.computerScore);

    } else if (userChoice === "scissor" && choices[computerChoice]  === "rock") {
      alert("Computer win")
      //computerScore++
      RPS.gameState.computerScore++
      console.log(RPS.gameState.computerScore);
      $("#computerScore").html(RPS.gameState.computerScore);

    } else if (userChoice === "scissor" && choices[computerChoice]  === "paper") {
      alert("You win")
      //userScore++
      RPS.gameState.userScore++
      console.log(RPS.gameState.userScore);
      $("#userScore").html(RPS.gameState.userScore);

    } else {
      //Tie
      alert("Tie!")
      RPS.gameState.ties++;
      console.log(ties);
      $("#ties").html(RPS.gameState.ties);
      
    }
    RPS.gameState.roundCount++;
    $("#roundNumber").html(RPS.gameState.roundCount);
    console.log(RPS.gameState.roundCount);
  });


});