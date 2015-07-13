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
      rps.player_selection('Rock')
      expect(rps.choice).toEqual('Rock')
    });

    it('fails if selection not in list of choices', function(){
      expect(function(){rps.player_selection('banana');}).toThrow(new Error('Please select Rock, Paper or Scissors'));
    });

  });

  describe ('when computer selects rock', function(){

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0)

    });


    it('player selects rock, results in a draw', function() {
      rps.player_selection('Rock');
      expect(rps.outcome()).toEqual('Draw')
    });

    it('player selects paper, results in a win', function() {
      rps.player_selection('Paper');
      expect(rps.outcome()).toEqual('Win')
    });

    it('player selects scissors, results in a loss', function() {
      rps.player_selection('Scissors');
      expect(rps.outcome()).toEqual('Lose')
    });


  });

});
