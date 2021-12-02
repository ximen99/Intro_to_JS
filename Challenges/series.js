class Series {
  constructor(numStr) {
    this.numStr = numStr;
  }
  slices(num) {
    let resultArr = [];
    if (num > this.numStr.length) {
      throw new Error("slice length need to be shorter than string length");
    }
    for (let i = 0; i < this.numStr.length - num + 1; i++) {
      resultArr.push(this.strToArray(this.numStr.slice(i, i + num)));
    }
    return resultArr;
  }
  strToArray(str) {
    return str.split("").map((num) => Number(num));
  }
}

module.exports = Series;
