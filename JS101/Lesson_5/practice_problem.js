//Q1
// let arr = ["10", "11", "9", "7", "8"];
// arr.sort((a, b) => Number(b) - Number(a));
// console.log(arr);

//Q2
// let books = [
//   {
//     title: "One Hundred Years of Solitude",
//     author: "Gabriel Garcia Marquez",
//     published: "1967",
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     published: "1925",
//   },
//   { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
//   { title: "Ulysses", author: "James Joyce", published: "1922" },
//   { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
// ];

// console.log(
//   books.sort((a, b) => Number(a["published"]) - Number(b["published"]))
// );

//Q4
// let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];
// console.log(arr1[2][1][3]);

// let arr2 = [
//   { first: ["a", "b", "c"], second: ["d", "e", "f"] },
//   { third: ["g", "h", "i"] },
// ];
// console.log(arr2[1]["third"][0]);

// let arr3 = [["abc"], ["def"], { third: ["ghi"] }];
// console.log(arr3[2]["third"][0][0]);

// let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };
// console.log(obj1["b"][1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };
// console.log(Object.keys(obj2["third"])[0]);

//Q4
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// console.log(arr1);

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// console.log(arr2);

// let obj1 = { first: [1, 2, [3]] };
// obj1["first"][2][0] = 4;
// console.log(obj1);

// let obj2 = { a: { a: ["1", "two", 3], b: 4 }, b: 5 };
// obj2["a"]["a"][2] = 4;
// console.log(obj2);

// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" },
// };

// // console.log(Object.values(munsters));
// ageSum = Object.values(munsters).reduce((sum, cur) => {
//   if (cur.gender === "male") {
//     sum += cur.age;
//   }
//   return sum;
// }, 0);

// console.log(ageSum);

// let munsters = {
//   herman: { age: 32, gender: "male" },
//   lily: { age: 30, gender: "female" },
//   grandpa: { age: 402, gender: "male" },
//   eddie: { age: 10, gender: "male" },
//   marilyn: { age: 23, gender: "female" },
// };

// for (let member in munsters) {
//   console.log(
//     `${member} is a ${munsters[member].age}-year-old ${munsters[member].gender}`
//   );
// }

// let obj = {
//   first: ["the", "quick"],
//   second: ["brown", "fox"],
//   third: ["jumped"],
//   fourth: ["over", "the", "lazy", "dog"],
// };

// Object.values(obj).forEach((arr) => {
//   arr.forEach((word) => {
//     word.split("").forEach((char) => {
//       if (/[aeiou]/i.test(char)) {
//         console.log(char);
//       }
//     });
//   });
// });

//Q10
// let arr = [
//   ["b", "c", "a"],
//   [2, 11, -3],
//   ["blue", "black", "green"],
// ];

// result = arr.map((arr) => {
//   let arrCopy = arr.slice();
//   return arrCopy.sort((a, b) => {
//     if (a > b) {
//       return -1;
//     }
//     if (a < b) {
//       return 1;
//     }
//   });
// });

// console.log(result);

//Q11
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let arrCopy = [];

// arr.reduce((counter, obj) => {
//   let objCopy = {};
//   for (const [key, value] of Object.entries(obj)) {
//     objCopy[key] = value + 1;
//   }
//   arrCopy[counter] = objCopy;
//   return counter + 1;
// }, 0);
// console.log(arrCopy);

//Q12
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// console.log(arr.map((innerArray) => innerArray.filter((num) => num % 3 === 0)));

// Q13
// let arr = [
//   [1, 6, 7],
//   [1, 5, 3],
//   [1, 8, 3],
// ];

// function sumOdd(arr) {
//   return arr.reduce((sumOdd, num) => {
//     if (num % 2 === 1) {
//       sumOdd += num;
//     }
//     return sumOdd;
//   }, 0);
// }

// // console.log(sumOdd([1, 6, 7]));

// arr.sort((arr1, arr2) => sumOdd(arr1) - sumOdd(arr2));

// console.log(arr);

// let obj = {
//   grape: { type: "fruit", colors: ["red", "green"], size: "small" },
//   carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
//   apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
//   apricot: { type: "fruit", colors: ["orange"], size: "medium" },
//   marrow: { type: "vegetable", colors: ["green"], size: "large" },
// };

// let resultArr = [];

// Object.values(obj).forEach((obj) => {
//   if (obj.type === "fruit") {
//     resultArr.push(
//       obj.colors.map(
//         (color) =>
//           color.slice(0, 1).toUpperCase() + color.slice(1).toLowerCase()
//       )
//     );
//   }
//   if (obj.type === "vegetable") {
//     resultArr.push(obj.size.toUpperCase());
//   }
// });

// console.log(resultArr);

// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// console.log(
//   arr.filter((obj) => {
//     return Object.values(obj).every((arr) => arr.every((num) => num % 2 === 0));
//   })
// );

// let arr = [
//   ["a", 1],
//   ["b", "two"],
//   ["sea", { c: 3 }],
//   ["D", ["a", "b", "c"]],
// ];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// let resultObj = {};
// arr.forEach((arr) => {
//   resultObj[arr[0]] = arr[1];
// });
// console.log(resultObj);

// let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
// const UUID_LENGTH = "f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91".length;
// const DASH_POSITION = [8, 13, 18, 23];
// let resultStr = "";
// for (let i = 0; i < UUID_LENGTH; i++) {
//   if (DASH_POSITION.includes(i)) {
//     resultStr += "-";
//   } else {
//     resultStr += chars[Math.floor(Math.random() * chars.length)];
//   }
// }

// console.log(resultStr);
