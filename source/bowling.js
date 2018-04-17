var BowlingGame = function() {
  this.round = 0;
  this._roll = new Array(21);
  for(var i = 0; i < 21; i++) {
    this._roll[i] = 0;
  }
};

BowlingGame.prototype.roll = function(pins) {
  this._roll[this.round] = pins;
  this.round += 1;
};

BowlingGame.prototype.isSpare = function(f) {
  return (this._roll[f * 2] + this._roll[f * 2 + 1] === 10);
}

BowlingGame.prototype.score = function() {
  var score = 0;
  for(var j = 0; j < 10; j++) {
    if(this.isSpare(j)) {
      score += this._roll[(j + 1) * 2]
    }
    score += this._roll[j * 2] + this._roll[j * 2 + 1];
  }
  return score;
};

module.exports = BowlingGame;
