$(document).ready(function(){

  //Generate a random choice for computer
  var choices = ["rock", "paper", "scissor"]

  //Get the value of users button click

  $(".btn-block").on("click", function(){
    var userChoice = $(this).attr("data-choice");
    console.log(userChoice);
    var computerChoice = Math.floor(Math.random() * choices.length)
    console.log(choices[computerChoice]);

    if (userChoice === "rock" && choices[computerChoice]  === "paper") {
      alert("Computer wins")
    } else if (userChoice === "rock" && choices[computerChoice]  === "scissor") {
      alert("You win")
    } else if (userChoice === "paper" && choices[computerChoice]  === "rock") {
      alert("You win")
    } else if (userChoice === "paper" && choices[computerChoice]  === "scissor") {
      alert("Computer win")
    } else if (userChoice === "scissor" && choices[computerChoice]  === "rock") {
      alert("Computer win")
    } else if (userChoice === "scissor" && choices[computerChoice]  === "paper") {
      alert("You win")
    } else {
      alert(userChoice)
      alert(choices[computerChoice])
    }

  });


});