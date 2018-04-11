var BowlingGame = function() {
  this.rolls = [];
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function() {
  var total = 0;
  for (i = 0; i < this.rolls.length; i++) {
    total += this.rolls[i];
  }
  return total;
};

module.exports = BowlingGame;
