class SumOfMultiples {
  constructor(...args) {
    this.baseNums = args.length ? args : [3, 5];
  }
  to(checkNum) {
    let multiples = [];
    this.baseNums.forEach((element) => {
      let i = 1;
      while (i * element < checkNum) {
        if (!multiples.includes(i * element)) {
          multiples.push(i * element);
        }
        i += 1;
      }
    });
    return multiples.reduce((accum, element) => accum + element, 0);
  }
  static to(checkNum) {
    return new SumOfMultiples().to(checkNum);
  }
}

module.exports = SumOfMultiples;
