class DNA {
  constructor(strand) {
    this.strand = strand;
  }
  hammingDistance(distance) {
    let minLength = Math.min(distance.length, this.strand.length);
    let result = 0;
    for (let i = 0; i < minLength; i++) {
      if (this.strand[i] !== distance[i]) {
        result += 1;
      }
    }
    return result;
  }
}

module.exports = DNA;
