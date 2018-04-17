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

BowlingGame.prototype.score = function() {
  var _score = 0;
  for(var j = 0; j < 10; j++) {
    _score += this._roll[j * 2] + this._roll[j * 2 + 1];
  }
  return _score;
};

module.exports = BowlingGame;
