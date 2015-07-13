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
      expect(rps.player_selection('Rock')).toEqual('Rock')
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



  });

});
