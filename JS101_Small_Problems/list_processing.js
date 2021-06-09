// function sum(num) {
//   let digitArr = String(num).split('');

//   return digitArr.reduce((cum, digit) => {
//     cum += Number(digit);
//     return cum;
//   }, 0)
// }

// console.log(sum(123456789));

// function alphabeticNumberSort(arr) {
//   let wordArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
//   arr.sort((num1,num2) => {
//     if (wordArr[num1] <wordArr[num2]) {
//       return -1;
//     } else if (wordArr[num1] > wordArr[num2]) {
//       return 1;
//     } else return 0;
//   })
//   return arr;
// }

// console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));

// function multiplyAllPairs(arr1, arr2) {
//   let resultArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       resultArr.push(arr1[i] * arr2[j]);
//     }
//   }
//   resultArr.sort((num1, num2) => {
//     if (num1 < num2) return -1;
//     if (num1 < num2) return 1;
//     return 0;
//   });
//   return resultArr;
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));

// function leadingSubstrings(str) {
//   let result = [];
//   let cumStr = "";
//   str.split("").map((i) => {
//     cumStr += i;
//     result.push(cumStr);
//   });
//   return result;
// }

// console.log(leadingSubstrings("xyzzy"));
