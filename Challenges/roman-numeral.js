class RomanNumeral {
  static NUMBERS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  static ROMAN_CHAR = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  constructor(num) {
    this.number = num;
  }

  toRoman() {
    let resultStr = "";
    let remaining = this.number;
    while (remaining > 0) {
      for (let i = 0; i < RomanNumeral.NUMBERS.length; i++) {
        let multiple = Math.floor(remaining / RomanNumeral.NUMBERS[i]);
        if (multiple > 0) {
          resultStr += RomanNumeral.ROMAN_CHAR[i].repeat(multiple);
          remaining -= multiple * RomanNumeral.NUMBERS[i];
          break;
        }
      }
    }
    return resultStr;
  }
}

module.exports = RomanNumeral;
