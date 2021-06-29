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

