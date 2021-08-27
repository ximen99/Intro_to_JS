// let template1 =
//   "The %{adjective} brown %{noun} %{adverb} " +
//   "%{verb} the %{adjective} yellow " +
//   "%{noun}, who %{adverb} %{verb} his " +
//   "%{noun} and looks around.";

// let template2 = "The %{noun} %{verb} the %{noun}'s %{noun}.";

// function madlibs(template) {
//   const REPLACEMENT_TEXTS = {
//     adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
//     noun: ["fox", "dog", "head", "leg", "tail"],
//     verb: ["jumps", "lifts", "bites", "licks", "pats"],
//     adverb: ["easily", "lazily", "noisily", "excitedly"],
//   };

//   function replaceText(match) {
//     let key = match.replace(/[^a-z]/g, "");
//     let index = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
//     return REPLACEMENT_TEXTS[key][index];
//   }

//   return template.replace(/%{[a-z]+}/g, replaceText);
// }

// console.log(madlibs(template1));

// function transpose(matrix) {
//   let newMatrix = [];
//   for (let i = 0; i < 3; i++) {
//     newMatrix.push([]);
//   }
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       newMatrix[i][j] = matrix[j][i];
//     }
//   }
//   return newMatrix;
// }

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// console.log(transpose(matrix));

// function transpose(matrix) {
//   let newMatrix = [];
//   for (let i = 0; i < matrix[0].length; i++) {
//     newMatrix.push([]);
//   }
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       newMatrix[j][i] = matrix[i][j];
//     }
//   }
//   return newMatrix;
// }

// console.log(
//   transpose([
//     [1, 2, 3, 4, 5],
//     [4, 3, 2, 1, 0],
//     [3, 7, 8, 6, 2],
//   ])
// );

// function rotate90(matrix) {
//   let newMatrix = [];
//   for (let i = 0; i < matrix[0].length; i++) {
//     newMatrix.push([]);
//   }
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       newMatrix[j][i] = matrix[i][j];
//     }
//   }

//   for (let rowIdx = 0; rowIdx < newMatrix.length; rowIdx++) {
//     newMatrix[rowIdx].reverse();
//   }

//   return newMatrix;
// }

// let matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// let matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8],
// ];
// console.log(rotate90(matrix1));

// function mergeSort(array) {
//   if (array.length === 1) return array;

//   let array1 = array.slice(0, array.length / 2);
//   let array2 = array.slice(array.length / 2);
//   array1 = mergeSort(array1);
//   array2 = mergeSort(array2);
//   return merge(array1, array2);
// }

// function merge(arr1, arr2) {
//   let merged = [];
//   let arrA = arr1.slice();
//   let arrB = arr2.slice();
//   while (arrA.length > 0 && arrB.length > 0) {
//     merged.push(arrA[0] <= arrB[0] ? arrA.shift() : arrB.shift());
//   }
//   return merged.concat(arrA.length === 0 ? arrB : arrA);
// }

// console.log(mergeSort([9, 5, 7, 1]));

// function binarySearch(arr, searchWord) {
//   let unsearched = arr;
//   let unsearchedArrLowerBoundOrigionalIdx = 0;

//   do {
//     let midIdx = Math.floor(unsearched.length / 2);
//     let upperHalf = unsearched.slice(midIdx);
//     let lowerHalf = unsearched.slice(0, midIdx);
//     if (unsearched[midIdx] === searchWord) {
//       return midIdx + unsearchedArrLowerBoundOrigionalIdx;
//     } else if (unsearched[midIdx] > searchWord) {
//       unsearched = lowerHalf;
//     } else {
//       unsearched = upperHalf;
//       unsearchedArrLowerBoundOrigionalIdx += midIdx;
//     }
//     console.log(unsearched);
//   } while (unsearched.length > 1);

//   if (unsearched[0] === searchWord) {
//     return unsearchedArrLowerBoundOrigionalIdx;
//   } else {
//     return -1;
//   }
// }

// console.log(
//   binarySearch(
//     ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
//     "Tyler"
//   )
// );

// var Fraction = require("fraction.js");

// function egyptian(targetValue) {
//   let unitDenominator = 1;
//   let denominator = [];
//   while (targetValue > 0) {
//     let unitFraction = new Fraction(1, unitDenominator);
//     if (targetValue >= unitFraction) {
//       targetValue.sub(unitFraction);
//       denominator.push(unitFraction);
//     }
//     unitDenominator += 1;
//   }
//   return denominator;
// }

// function unegyptian(denominators) {
//   return denominators.reduce(
//     (accum, num) => accum + new Fraction(1, num),
//     new Fraction(0)
//   );
// }
