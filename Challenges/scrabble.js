class Scrabble {
  static SCORE_MAP = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };
  constructor(word) {
    this.word = word;
  }
  static score(word) {
    if (!word) {
      return 0;
    }
    let result = 0;
    word.split("").forEach((char) => {
      let charUpper = char.toUpperCase();
      if (Scrabble.SCORE_MAP.hasOwnProperty(charUpper)) {
        result += Scrabble.SCORE_MAP[charUpper];
      }
    });
    return result;
  }
  score() {
    return Scrabble.score(this.word);
  }
}

module.exports = Scrabble;
