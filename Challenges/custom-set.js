class CustomSet {
  constructor(arr = []) {
    this.values = CustomSet.findUniqueValues(arr);
  }
  static findUniqueValues(arr) {
    let uniqueArr = [];
    arr.forEach((elem, i) => {
      if (!arr.slice(i + 1).includes(elem)) {
        uniqueArr.push(elem);
      }
    });
    return uniqueArr;
  }
  isEmpty() {
    return !this.values.length;
  }
  contains(value) {
    return this.values.includes(value);
  }
  isSubset(set) {
    return this.values.every((elem) => set.contains(elem));
  }
  isDisjoint(set) {
    return this.values.every((elem) => !set.contains(elem));
  }
  add(value) {
    if (!this.values.includes(value)) {
      this.values.push(value);
    }
    return this;
  }
  intersection(other) {
    let intersectionValues = this.values.filter((elem) => other.contains(elem));
    return new CustomSet(intersectionValues);
  }
  difference(other) {
    let differentValues = this.values.filter((elem) => !other.contains(elem));
    return new CustomSet(differentValues);
  }
  union(other) {
    let unionSet = other.difference(this);
    this.values.forEach((elem) => unionSet.add(elem));
    return unionSet;
  }
  isSame(set) {
    return this.isSubset(set) && set.isSubset(this);
  }
}

module.exports = CustomSet;
