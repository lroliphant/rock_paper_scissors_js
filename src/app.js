var game = new RockPaperScissors();

$("#rock").on("click", function() {
  game.computerChoice();
  game.playerSelection("Rock");
  $("#result").html(game.outcome());
});

$("#paper").on("click", function() {
  game.computerChoice();
  game.playerSelection("Paper");
  $("#result").html(game.outcome());
});

$("#scissors").on("click", function() {
  game.computerChoice();
  game.playerSelection("Scissors");
  $("#result").html(game.outcome());
});
