var assert = require('assert');
var BowlingGame = require('../source/bowling');

describe('Bowling scorer', function () {

   beforeEach(function () {
      this.game = new BowlingGame();
   });

   it('should return a score of 0 if no pins have been knocked down', function () {
      var score = this.game.score();
      assert.equal(score, 0);
   });

   it('should return a score of 1 if 1 pin has been knocked down', function () {
      this.game.roll(1);
      var score = this.game.score();
      assert.equal(score, 1);
   });

   it('should return a score of 20 for 20 1 pin rolls', function() {
     for(i = 0; i < 20; i++) {
       this.game.roll(1);
     }
     var score = this.game.score();
     assert.equal(score, 20);
   });

});
