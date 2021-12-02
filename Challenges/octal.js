class Octal {
  constructor(octStr) {
    this.octStr = octStr;
  }
  toDecimal() {
    let result = 0;
    let octArr = this.octStr.split("").reverse();
    for (let i = 0; i < octArr.length; i++) {
      let num = Number(octArr[i]);
      if (!Number.isInteger(num) || num >= 8) {
        return 0;
      }
      result += num * Math.pow(8, i);
      console.log(num, Math.pow(8, i), result);
    }
    return result;
  }
}

module.exports = Octal;
