var RockPaperScissors = function() {
  this.choices = ['Rock', 'Paper', 'Scissors']
};

RockPaperScissors.prototype.computerChoice = function () {
  var rand = this.choices[Math.floor(Math.random() * this.choices.length)];
  return rand;
};

RockPaperScissors.prototype.player_selection = function(choice) {
  if (_.contains(this.choices, choice)) {
    return choice;
  }
  else {
    throw new Error('Please select Rock, Paper or Scissors');
  }
};

RockPaperScissors.prototype.outcome = function () {
  return 'Draw';
};
