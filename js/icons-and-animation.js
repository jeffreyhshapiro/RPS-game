var rockPaper = function(){
  $("#user").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $("#user").addClass("fa-hand-rock-o");
  $("#computer").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $("#computer").addClass("fa-hand-paper-o");
};

var rockScissor = function(){
  $("#user").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $("#user").addClass("fa-hand-rock-o");
  $("#computer").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $("#computer").addClass("fa-hand-scissors-o");
};

var paperRock = function(){
  $("#user").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $("#user").addClass("fa-hand-paper-o");
  $("#computer").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $("#computer").addClass("fa-hand-rock-o");
};

var paperScissor = function(){
  $("#user").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $("#user").addClass("fa-hand-paper-o");
  $("#computer").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $("#computer").addClass("fa-hand-scissors-o");
};

var scissorRock = function(){
  $("#user").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $("#user").addClass("fa-hand-scissors-o");
  $("#computer").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $("#computer").addClass("fa-hand-rock-o");
};

var scissorPaper = function(){
  $("#user").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $("#user").addClass("fa-hand-scissors-o");
  $("#computer").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $("#computer").addClass("fa-hand-paper-o");
};

var rockRock = function(){
   $("#user").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
   $("#user").addClass("fa-hand-rock-o");
   $("#computer").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
   $("#computer").addClass("fa-hand-rock-o");
};

var paperPaper = function(){
   $("#user").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
   $("#user").addClass("fa-hand-paper-o");
   $("#computer").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
   $("#computer").addClass("fa-hand-paper-o");
};

var scissorScissor = function(){
   $("#user").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
   $("#user").addClass("fa-hand-scissors-o");
   $("#computer").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
   $("#computer").addClass("fa-hand-scissors-o");
};

var lizardLizard = function(){
   $("#user").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
   $("#user").addClass("fa-hand-lizard-o");
   $("#computer").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
   $("#computer").addClass("fa-hand-lizard-o");

};

/*function computerThinking(){
  debugger;
  $("#computer").removeClass("fa-hand-lizard-o fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o").addClass("fa-hand-rock-o").delay(250).fadeOut(1000).addClass("fa-hand-paper-o").fadeIn(1000).delay(200).fadeOut(1000);
};*/