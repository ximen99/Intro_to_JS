const PerfectNumber = {
  classify(num) {
    if (num < 1) {
      throw new Error("Input need to be natural number (eg 1, 2, 3...)");
    }
    let aliquot = this.aliquotSum(num);

    if (num > aliquot) {
      return "deficient";
    } else if (num < aliquot) {
      return "abundant";
    } else return "perfect";
  },
  aliquotSum(num) {
    let result = [1];
    let root = Math.sqrt(num);
    if (root % 1 === 0 && root !== 1) {
      result.push(root);
    } else {
      root = Math.floor(root) + 1;
    }
    for (let i = 2; i < root; i++) {
      if (num % i === 0) {
        result.push(i);
        result.push(num / i);
      }
    }

    return result.reduce((accum, element) => accum + element);
  },
};
module.exports = PerfectNumber;
