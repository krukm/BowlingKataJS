var BowlingGame = function() {
  this.score = 0;
};

BowlingGame.prototype.roll = function(pins) {
  this.score += pins;
};

BowlingGame.prototype.score = function() {
  return this.score();
};

module.exports = BowlingGame;
