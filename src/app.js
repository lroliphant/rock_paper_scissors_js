var game = new RockPaperScissors();

// $("#rock").on("click", function() {
//   event.preventDefault();
//   game.computerChoice();
//   game.playerSelection("Rock");
//   $("#result").html(game.outcome());
// });
//
// $("#paper").on("click", function() {
//   event.preventDefault();
//   game.computerChoice();
//   game.playerSelection("Paper");
//   $("#result").html(game.outcome());
// });
//
// $("#scissors").on("click", function() {
//   event.preventDefault();
//   game.computerChoice();
//   game.playerSelection("Scissors");
//   $("#result").html(game.outcome());
// });

$("#rock").click(function(ev) {
  // ev.stopPropagation();
  game.computerChoice();
  game.playerSelection('Rock');
  $('#result').html(game.outcome());
  console.log("yep]elfm");
  ev.preventDefault();
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

// $('body').on({
//     hover: function() {
//         console.log("yeahhhh!!! but this doesn't work for me :(");
//     },
//     click: function() {
//         console.log("kfkvmv");
//     }
// },'#my-button');


// <a href="#" id="theLink">My Link</a>
// JS
//
// $('theLink').click(function(ev){
//     // do whatever you want here
//
//     ev.preventDefault();
//     ev.stopPropagation();
// });
