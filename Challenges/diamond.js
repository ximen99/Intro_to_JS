class Diamond {
  static alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static makeDiamond(letter) {
    let halfSize = Diamond.alphabet.indexOf(letter.toUpperCase());
    let alphabetUsed = Diamond.alphabet.slice(0, halfSize + 1);
    let halfDiomondArr = [
      " ".repeat(halfSize) + "A" + " ".repeat(halfSize) + "\n",
    ];
    for (let i = 1; i <= halfSize; i++) {
      let halfLine =
        " ".repeat(halfSize - i) +
        alphabetUsed.slice(i, i + 1) +
        " ".repeat(i - 1);
      halfDiomondArr.push(
        halfLine + " " + halfLine.split("").reverse().join("") + "\n"
      );
    }

    return (
      halfDiomondArr.join("") +
      halfDiomondArr
        .slice(0, halfDiomondArr.length - 1)
        .reverse()
        .join("")
    );
  }
}

module.exports = Diamond;
