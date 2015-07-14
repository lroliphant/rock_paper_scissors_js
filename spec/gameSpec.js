// presented the choices (rock, paper and scissors)
// the marketeer can choose one option
// the game will choose a random option
// a winner will be declared

describe ('Game', function(){

  var rps;

  beforeEach(function(){
    rps = new RockPaperScissors();
    // rps.computerChoice = 'Rock';
  });

  it('has an option of Rock, Paper and Scissors', function() {
    expect(rps.choices).toEqual(['Rock','Paper','Scissors']);
  });

  describe ('player selection', function() {

    it('can select rock', function() {
      rps.playerSelection('Rock')
      expect(rps.choice).toEqual('Rock')
    });

    it('fails if selection not in list of choices', function(){
      expect(function(){rps.playerSelection('banana');}).toThrow(new Error('Please select Rock, Paper or Scissors'));
    });

  });

  describe ('when computer selects rock', function(){

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0)

    });


    it('player selects rock, results in a draw', function() {
      rps.playerSelection('Rock');
      expect(rps.outcome()).toEqual('Draw!')
    });

    it('player selects paper, results in a win', function() {
      rps.playerSelection('Paper');
      expect(rps.outcome()).toEqual('You win!')
    });

    it('player selects scissors, results in a loss', function() {
      rps.playerSelection('Scissors');
      expect(rps.outcome()).toEqual('You lose!')
    });

  });


  describe ('when computer selects paper', function(){

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0.5)

    });


    it('player selects rock, results in a loss', function() {
      rps.playerSelection('Rock');
      expect(rps.outcome()).toEqual('Lose')
    });

    it('player selects paper, results in a draw', function() {
      rps.playerSelection('Paper');
      expect(rps.outcome()).toEqual('Draw')
    });

    it('player selects scissors, results in a win', function() {
      rps.playerSelection('Scissors');
      expect(rps.outcome()).toEqual('Win')
    });

  });


  describe ('when computer selects scissors', function(){

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0.9)

    });


    it('player selects rock, results in a win', function() {
      rps.playerSelection('Rock');
      expect(rps.outcome()).toEqual('Win')
    });

    it('player selects paper, results in a loss', function() {
      rps.playerSelection('Paper');
      expect(rps.outcome()).toEqual('Lose')
    });

    it('player selects scissors, results in a draw', function() {
      rps.playerSelection('Scissors');
      expect(rps.outcome()).toEqual('Draw')
    });

  });


  describe ('counter', function(){

    it('increments players win count', function(){
      rps.playerSelection('Scissors');
      spyOn(Math, 'random').and.returnValue(0.5); //gives paper
      rps.outcome();
      expect(rps.playerWinsCount).toEqual(1)
    });

    it('increments computers win count', function(){
      rps.playerSelection('Rock');
      spyOn(Math, 'random').and.returnValue(0.5); //gives paper
      rps.outcome();
      expect(rps.computerWinsCount).toEqual(1)
    });

  });


});
