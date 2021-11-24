// function foo(condition) {
//   let bar;
//   let qux;
//   let xyzzy;
//   console.log(bar);

//   qux = 0.5772;

//   if (condition) {
//     qux = 3.1415;
//     console.log(qux);
//   } else {
//     bar = 24;

//     xyzzy = function () {
//       let qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);
// Pet.prototype.walk = function () {
//   console.log(`${this.name} is walking.`);
// };

// function Pet(name, image) {
//   this.name = name;
//   this.image = image;
// }
// console.log(Image);
// class Image {
//   constructor(file) {
//     this.file = file;
//   }
// }

// var catImage = new Image("cat.png");
// var pudding = new Pet("Pudding", catImage);

// function makeCounterLogger(num) {
//   return function (target) {
//     if (target > num) {
//       for (var i = num; i <= target; i++) {
//         console.log(i);
//       }
//     } else {
//       for (var i = num; i >= target; i--) {
//         console.log(i);
//       }
//     }
//   };
// }

// function makeList() {
//   let items = [];

//   return {
//     add(newItem) {
//       let index = items.indexOf(item);
//       if (index === -1) {
//         items.push(item);
//         console.log(item + " added!");
//       }
//     },
//     list() {
//       if (items.length === 0) {
//         console.log("The list is empty.");
//       } else {
//         items.forEach(function (item) {
//           console.log(item);
//         });
//       }
//     },
//     remove(removeItem) {
//       let index = items.indexOf(item);
//       if (index !== -1) {
//         items.splice(index, 1);
//         console.log(item + " removed!");
//       }
//     },
//   };
// }

// let list = makeList();
// list.add("peas");
// list.list();
// list.add("corn");
// list.list();

// const fun = (...arr) => {
//   let [first, , , , last] = arr;
//   return { first, last };
// };

// let arr = ["Fluffy", "Pudding", "Mister", "Ben", "Butterscotch"];
// console.log(fun(...arr));
