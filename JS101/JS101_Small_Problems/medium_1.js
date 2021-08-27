// function rotateArray(array) {
//   if (array.length === 0) {
//     return [];
//   } else if (!Array.isArray(array)) {
//     return undefined;
//   } else {
//     return array.slice(1, array.length).concat(array.slice(0, 1));
//   }
// }

// console.log(rotateArray(3));

// function rotateRightmostDigits(number, digitCount) {
//   return Number(String(number)
//     .slice(0, -digitCount)
//     .concat(rotateArray(String(number)
//       .slice(-digitCount)
//       .split(''))
//       .join('')));
// }

// console.log(rotateRightmostDigits(735291, 4));

// function maxRotation(number) {
//   let result = number;
//   for (let i = String(number).length; i >= 2; i--) {
//     result = rotateRightmostDigits(result, i);
//   }
//   return result;
// }

// console.log(maxRotation(8703529146));

// function minilang(sentence) {
//   let stack = [];
//   let register = 0;
//   arr = sentence.split(' ')
//   arr.forEach(element => {
//     switch (element) {
//       case 'PUSH':
//         stack.push(register);
//         break;
//       case 'ADD':
//         register += stack.pop();
//         break;
//       case 'SUB':
//         register -= stack.pop();
//         break;
//       case 'MULT':
//         register *= stack.pop();
//         break;
//       case 'DIV':
//         register = Math.floor(register / stack.pop());
//         break;
//       case 'REMAINDER':
//         register %= stack.pop();
//         break;
//       case 'POP':
//         register = stack.pop();
//         break;
//       case 'PRINT':
//         console.log(register);
//         break;
//       default:
//         register = Number(element);
//         break
//     }
//   });
// }

// minilang('PRINT');

// function wordToDigit(sentence) {
//   digitMap = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   for (const digit of Object.keys(digitMap)) {
//     regex = new RegExp(digit, "ig");
//     sentence = sentence.replace(regex, digitMap[digit]);
//   }
//   return sentence;
// }
// let sentence = "Please call me at five five five one two three four. Thanks.";
// console.log(wordToDigit(sentence));

// let memo = {};
// function fibonacci(n) {
//   if (n <= 2) {
//     return 1;
//   } else if (memo[n]) {
//     return memo[n];
//   } else {
//     memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
//     return memo[n];
//   }
// }

// console.log(fibonacci(12));

// function fibonacci(n) {
//   let arr = [1, 1];
//   if (n === 1 || n === 2) {
//     return 1;
//   } else {
//     for (let i = 2; i++; i <= n) {
//       arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     return arr.pop();
//   }
// }
