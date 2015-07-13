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
  });

  // describe ('when computer selects rock', function(){
  //
  // });

});
