let assert = require('assert');
let fs = require('fs');
let BowlingGame = require('../source/bowling');
let should = require('should');

describe('Bowling Scorer', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('should return a score of 0 if no pins have been knocked down', function() {
    game.score().should.equal(0);
  });

  it('should return 0 for 20 rolls of 0 pins knocked down', function() {
    for (i = 0; i < 20; i++) {
      game.roll(0);
    }
    game.score().should.equal(0);
  });

  it('should return a score of 1 if 1 pin has been knocked down', function() {
    game.roll(1);
    game.score().should.equal(1);
  });

  it('should return a score of 20 for 20 1 pin rolls', function() {
    for (i = 0; i < 20; i++) {
      game.roll(1);
    }
    game.score().should.equal(20);
  });

  it('should return a score of 23 for a spare after rolling 5 plus 3 pins', function() {
    game.roll(5);
    game.roll(5);
    game.roll(5);
    game.roll(3);

    game.score().should.equal(23);
  });

  it('should return a score of 26 for a strike after rolling 5 plus 3 pins', function() {
    game.roll(5);
    game.roll(5);
    game.roll(5);
    game.roll(3);

    game.score().should.equal(26);
  })

});
