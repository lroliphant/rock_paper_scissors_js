var RockPaperScissors = function() {
  this.choices = ['Rock', 'Paper', 'Scissors']
};

RockPaperScissors.prototype.computerChoice = function () {
  var rand = this.choices[Math.floor(Math.random() * this.choices.length)];
  return rand;
};

RockPaperScissors.prototype.player_selection = function(choice) {
  return choice;
};