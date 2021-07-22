//Q3
// [1,4,9]
//Q4
// 11
//Q5
// true
//Q8
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// console.log(
//   flintstones.reduce((cum, cur, idx) => {
//     cum[cur] = idx;
//     return cum;
//   }, {})
// );
//Q9
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237,
// };
// let ageList = Object.values(ages);
// console.log(ageList.reduce((cum, cur) => cum + cur, 0));
//Q10
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237,
// };

// console.log(
//   Object.values(ages).reduce((min, cur) => {
//     return cur < min ? cur : min;
//   }, Number.POSITIVE_INFINITY)
// );

// function countLetter(str) {
//   let resultObj = {};
//   str.split("").forEach((letter) => {
//     addCount(resultObj, letter);
//   });
//   return resultObj;
// }

// function addCount(obj, letter) {
//   const regex = /[a-z]/i;
//   if (regex.test(letter)) {
//     // console.log(obj[letter]);
//     if (obj[letter]) {
//       obj[letter] += 1;
//     } else {
//       obj[letter] = 1;
//     }
//   }
// }

// let statement = "The Flintstones Rock";
// console.log(countLetter(statement));
