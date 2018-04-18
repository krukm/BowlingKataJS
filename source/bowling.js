var BowlingGame = function() {
  this.round = 0;
  this._roll = new Array(21);
  for (var i = 0; i < 21; i++) {
    this._roll[i] = 0;
  }
};

BowlingGame.prototype.roll = function(pins) {
  this._roll[this.round] = pins;
  this.round += 1;
  if (pins === 10 && this.round <= 18) {
    this.round += 1;
  }
};

BowlingGame.prototype.isStrike = function(f) {
  return (this._roll[f * 2] === 10);
};

BowlingGame.prototype.isSpare = function(f) {
  return (this.framePins(f) === 10);
};

BowlingGame.prototype.framePins = function(f) {
  return (this._roll[f * 2] + this._roll[f * 2 + 1]);
};

BowlingGame.prototype.frameScore = function(f) {
  var score = 0;
  if (f === 9) {
    score += this._roll[f * 2 + 2];
  } else if (this.isStrike(f)) {
    if (this.isStrike(f + 1)) {
      score += 10 + this._roll[(f + 2) * 2];
    } else {
      score += this.framePins(f + 1);
    }
  } else if (this.isSpare(f)) {
    score += this._roll[(f + 1) * 2]
  }
  score += this.framePins(f);
  return score;
};

BowlingGame.prototype.score = function() {
  var score = 0;
  for (var j = 0; j < 10; j++) {
    score += this.frameScore(j)
  }
  return score;
};

module.exports = BowlingGame;
