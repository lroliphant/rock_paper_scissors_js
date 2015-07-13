var RockPaperScissors = function() {
  this.choices = ['Rock', 'Paper', 'Scissors'];
  this.choice = ''
};

RockPaperScissors.prototype.computerChoice = function () {
  var random = this.choices[Math.floor(Math.random() * this.choices.length)];
  return random;
};

RockPaperScissors.prototype.player_selection = function(choice) {
  if (_.contains(this.choices, choice)) {
    this.choice = choice;
  }
  else {
    throw new Error('Please select Rock, Paper or Scissors');
  }
};

RockPaperScissors.prototype.outcome = function () {
  if (this.choice === this.computerChoice()) {
    return 'Draw';
  }

  if (this.choice === 'Rock' && this.computerChoice() === 'Scissors') {
    return 'Win';
  }

  if (this.choice === 'Rock' && this.computerChoice() === 'Paper') {
    return 'Lose';
  }

  if (this.choice === 'Scissors' && this.computerChoice() === 'Paper') {
    return 'Win';
  }

  if (this.choice === 'Scissors' && this.computerChoice() === 'Rock') {
    return 'Lose';
  }

  if (this.choice === 'Paper' && this.computerChoice() === 'Rock') {
    return 'Win';
  }

  if (this.choice === 'Paper' && this.computerChoice() === 'Scissors') {
    return 'Lose';
  }
};
