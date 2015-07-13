var RockPaperScissors = function() {
  this.choices = ['Rock', 'Paper', 'Scissors'];
  this.choice = ''
};

RockPaperScissors.prototype.computerChoice = function () {
  var random = this.choices[Math.floor(Math.random() * this.choices.length)];
  return random;
};

RockPaperScissors.prototype.playerSelection = function(choice) {
  if (!(_.contains(this.choices, choice))) {
    throw new Error('Please select Rock, Paper or Scissors')
  }
  this.choice = choice;
};

RockPaperScissors.prototype.outcome = function () {
  if (this.choice === this.computerChoice()) {
    return 'Draw!';
  }

  if (this.choice === 'Rock' && this.computerChoice() === 'Scissors') {
    return 'You win!';
  }

  if (this.choice === 'Rock' && this.computerChoice() === 'Paper') {
    return 'You loose!';
  }

  if (this.choice === 'Scissors' && this.computerChoice() === 'Paper') {
    return 'You win!';
  }

  if (this.choice === 'Scissors' && this.computerChoice() === 'Rock') {
    return 'You loose!';
  }

  if (this.choice === 'Paper' && this.computerChoice() === 'Rock') {
    return 'You win!';
  }

  if (this.choice === 'Paper' && this.computerChoice() === 'Scissors') {
    return 'You loose!';
  }
};
