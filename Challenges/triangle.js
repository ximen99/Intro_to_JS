class Triangle {
  constructor(side1, side2, side3) {
    if (!Triangle.isValidTriangle(side1, side2, side3)) {
      throw new Error("Invalid Triangle Length!");
    }
    this.sides = [side1, side2, side3];
  }
  static isValidTriangle(side1, side2, side3) {
    let sides = [side1, side2, side3];
    sides.sort((a, b) => a - b);
    if (!sides.every((element) => element > 0)) {
      return false;
    } else if (sides[0] + sides[1] <= sides[2]) {
      return false;
    }
    return true;
  }
  kind() {
    let sides = [...this.sides].sort((a, b) => a - b);
    if (sides[0] === sides[1] && sides[1] === sides[2]) {
      return "equilateral";
    } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
      return "isosceles";
    } else return "scalene";
  }
}

module.exports = Triangle;
