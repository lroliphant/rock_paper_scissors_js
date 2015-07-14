var game = new RockPaperScissors();

$("#rock").click(function() {
  event.preventDefault();
  game.computerChoice();
  game.playerSelection('Rock');
  $('#result').html(game.outcome());;
});

$('#paper').click(function() {
  event.preventDefault();
  game.computerChoice();
  game.playerSelection('Paper');
  $("#result").html(game.outcome());
});

$('#scissors').click(function() {
  event.preventDefault();
  game.computerChoice();
  game.playerSelection('Scissors');
  $('#result').html(game.outcome());
});

// $('#playerCount').html(game.playerWinsCount);

// document.getElementById('playerCount').innerHTML = game.playerWinsCount;

$('.buttons').click(function() {
  $('#playerCount').html(game.playerWinsCount);
  $('#compCount').html(game.computerWinsCount);
});
