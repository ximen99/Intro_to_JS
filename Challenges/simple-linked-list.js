class Element {
  constructor(value, nextElement = null) {
    this.value = value;
    this.nextElement = nextElement;
  }
  datum() {
    return this.value;
  }
  next() {
    return this.nextElement;
  }
  isTail() {
    if (!this.nextElement) {
      return true;
    } else return false;
  }
}

class SimpleLinkedList {
  constructor() {
    this.headElement = null;
  }
  static fromArray(arr) {
    let list = new SimpleLinkedList();
    if (!arr) {
      return list;
    }
    arr = arr.slice();
    arr.reverse();
    arr.forEach((element) => list.push(element));
    return list;
  }
  size() {
    let sizeCount = 0;
    let curElement = this.headElement;
    while (curElement) {
      sizeCount += 1;
      curElement = curElement.next();
    }
    return sizeCount;
  }
  isEmpty() {
    if (!this.headElement) {
      return true;
    } else return false;
  }
  push(value) {
    this.headElement = new Element(value, this.headElement);
  }
  peek() {
    if (!this.headElement) {
      return null;
    } else return this.headElement.datum();
  }
  pop() {
    let returnElement = this.headElement;
    if (returnElement) {
      this.headElement = returnElement.next();
      return returnElement.datum();
    } else return null;
  }
  toArray() {
    let returnArr = [];
    let curElement = this.headElement;
    while (curElement) {
      returnArr.push(curElement.datum());
      curElement = curElement.next();
    }
    return returnArr;
  }
  head() {
    return this.headElement;
  }
  reverse() {
    let listArr = this.toArray();
    listArr.reverse();
    return SimpleLinkedList.fromArray(listArr);
  }
}

module.exports = {
  Element,
  SimpleLinkedList,
};
