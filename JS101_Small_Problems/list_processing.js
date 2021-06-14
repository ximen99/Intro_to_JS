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

// function substrings(str) {
//   let resultArr = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//       resultArr.push(str.slice(i, j + 1));
//     }
//   }
//   return resultArr;
// }

// console.log(substrings("abcde"));

// function isPalindrome(word) {
//   return (word.length > 1) && (word === word.split("").reverse().join(""));
// }

// console.log(isPalindrome('aa'))

// function palindromes(str) {
//   let resultArr = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//       if (isPalindrome(str.slice(i, j + 1))) {
//         resultArr.push(str.slice(i, j + 1))
//       };
//     }
//   }
//   return resultArr;
// }

// console.log(palindromes('hello-madam-did-madam-goodbye'))

// function sumOfSums(arr) {
//   let result = 0;
//   arr.reduce((sum, i) => {
//     sum += i;
//     result += sum;
//     return sum
//   }, 0);
//   return result;
// }

// console.log(sumOfSums([1, 2, 3, 4, 5]));

// function buyFruit(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let j = 1;
//     while (j <= arr[i][1]) {
//       result.push(arr[i][0]);
//       j++;
//     }
//   }
//   return result;
// }

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));

// function transactionsFor(id, transactions) {
//   let result = [];
//   for (let i = 0; i < transactions.length; i++) {
//     if (transactions[i].id === id) {
//       result.push(transactions[i]);
//     }
//   }
//   return result;
// }

// let transactions = [{ id: 101, movement: 'in', quantity: 5 },
// { id: 105, movement: 'in', quantity: 10 },
// { id: 102, movement: 'out', quantity: 17 },
// { id: 101, movement: 'in', quantity: 12 },
// { id: 103, movement: 'out', quantity: 20 },
// { id: 102, movement: 'out', quantity: 15 },
// { id: 105, movement: 'in', quantity: 25 },
// { id: 101, movement: 'out', quantity: 18 },
// { id: 102, movement: 'in', quantity: 22 },
// { id: 103, movement: 'out', quantity: 15 },];

// // console.log(transactionsFor(101, transactions));

// function isItemAvailable(id, transactions) {
//   return transactionsFor(id, transactions).reduce((cum, transaction) => {
//     if (transaction.movement === 'in') {
//       cum += transaction.quantity;
//     } else {
//       cum -= transaction.quantity;
//     }
//     return cum
//   }, 0) > 0;
// }

// console.log(isItemAvailable(105, transactions));