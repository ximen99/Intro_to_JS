// class CircularQueue {
//   constructor(posCount) {
//     this.items = [];
//     this.posCount = posCount;
//     for (var i = 1; i <= this.posCount; i++) {
//       this.items.push(null);
//     }
//   }
//   getLatestOrder() {
//     if (!this.getItemCounts()) {
//       return 0;
//     } else {
//       return this.items.reduce((highestOrder, item) => {
//         if (item) {
//           if (item.order > highestOrder) {
//             return item.order;
//           } else return highestOrder;
//         } else return highestOrder;
//       }, 0);
//     }
//   }
//   getItemCounts() {
//     return this.items.filter((item) => !!item).length;
//   }
//   getPosByOrder(order) {
//     return this.items.findIndex((item) => {
//       if (item) {
//         return item.order === order;
//       }
//       return false;
//     });
//   }
//   getNextPos(n) {
//     return ((n + 2) % this.posCount || this.posCount) - 1;
//   }

//   enqueue(value) {
//     let latestOrder = this.getLatestOrder();
//     let item = new Item(latestOrder + 1, value);
//     let itemCount = this.getItemCounts();
//     if (itemCount === 0) {
//       this.items[0] = item;
//     } else if (itemCount < this.posCount) {
//       let itemPos = this.getNextPos(this.getPosByOrder(latestOrder));
//       this.items[itemPos] = item;
//     } else {
//       let oldestOrder = latestOrder - this.getItemCounts() + 1;
//       this.items[this.getPosByOrder(oldestOrder)] = item;
//     }
//   }
//   dequeue() {
//     let itemCount = this.getItemCounts();
//     if (itemCount === 0) {
//       return null;
//     } else {
//       let latestOrder = this.getLatestOrder();
//       let oldestOrder = latestOrder - itemCount + 1;
//       let oldestPos = this.getPosByOrder(oldestOrder);
//       let oldestItem = this.items[oldestPos];
//       this.items[oldestPos] = null;
//       return oldestItem.value;
//     }
//   }
// }

// class Item {
//   constructor(order, value) {
//     this.order = order;
//     this.value = value;
//   }
//   getOrder() {
//     return this.order;
//   }
//   getValue() {
//     return this.value;
//   }
// }

// let queue = new CircularQueue(3);
// console.log(queue.dequeue() === null);

// queue.enqueue(1);
// queue.enqueue(2);
// console.log(queue.dequeue() === 1);

// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.dequeue() === 2);

// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(queue.dequeue() === 5);
// console.log(queue.dequeue() === 6);
// console.log(queue.dequeue() === 7);
// console.log(queue.dequeue() === null);

// let anotherQueue = new CircularQueue(4);
// console.log(anotherQueue.dequeue() === null);

// anotherQueue.enqueue(1);
// anotherQueue.enqueue(2);
// console.log(anotherQueue.dequeue() === 1);

// anotherQueue.enqueue(3);
// anotherQueue.enqueue(4);
// console.log(anotherQueue.dequeue() === 2);

// anotherQueue.enqueue(5);
// anotherQueue.enqueue(6);
// anotherQueue.enqueue(7);
// console.log(anotherQueue.dequeue() === 4);
// console.log(anotherQueue.dequeue() === 5);
// console.log(anotherQueue.dequeue() === 6);
// console.log(anotherQueue.dequeue() === 7);
// console.log(anotherQueue.dequeue() === null);
/*
rules:
number of position equal to buffer 
add item if empty :pos is after the latest added item.
else: replace the oldest item.
delete delte the oldest.
data: 
items: array
item class order and value;


*/
