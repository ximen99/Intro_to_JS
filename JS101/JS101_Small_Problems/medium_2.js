// function letterPercentages(str) {
//   let totalLength = str.length;
//   let lowerCaseRegex = /[a-z]/;
//   let upperCaseRegex = /[A-Z]/;
//   let lowerCaseLetterCount = 0;
//   let upperCaseLetterCount = 0;
//   let otherCount = 0;
//   const pctCal = (count) => {
//     return (count / totalLength).toFixed(2);
//   };
//   str.split("").forEach((char) => {
//     if (lowerCaseRegex.test(char)) {
//       lowerCaseLetterCount += 1;
//     } else if (upperCaseRegex.test(char)) {
//       upperCaseLetterCount += 1;
//     } else {
//       otherCount += 1;
//     }
//   });

//   return {
//     lowerCase: pctCal(lowerCaseLetterCount),
//     upperCase: pctCal(upperCaseLetterCount),
//     neither: pctCal(otherCount),
//   };
// }

// console.log(letterPercentages("abCdef 123"));

// function triangle(a, b, c) {
//   let arr = [a, b, c].sort((num1, num2) => num1 - num2);
//   let short = arr[0];
//   let mid = arr[1];
//   let long = arr[2];

//   if (short + mid <= long) return "invalid";

//   for (const i of arr) {
//     if (i === 0) return "invalid";
//   }

//   if ((short == mid) & (mid == long)) {
//     return "equilateral";
//   } else if ((short === mid) | (mid === long)) {
//     return "isosceles";
//   } else {
//     return "scalene";
//   }
// }

// console.log(triangle(3, 1, 1));

// function triangle(a, b, c) {
//   let arr = [a, b, c].sort((num1, num2) => num1 - num2);
//   let large, mid, small;
//   [small, mid, large] = arr;
//   if ((small <= 0) | (large + mid + small !== 180)) {
//     return "invalid";
//   } else if (large > 90) {
//     return "obtuse";
//   } else if (large === 90) {
//     return "right";
//   } else {
//     return "acute";
//   }
// }

// let cases = [
//   [60, 70, 50],
//   [30, 90, 60],
//   [120, 50, 10],
//   [0, 90, 90],
//   [50, 50, 50],
// ];

// for (const arr of cases) {
//   console.log(triangle(...arr));
// }

// function fridayThe13ths(year) {
//   let thirteenth = [];
//   for (let month = 0; month < 12; month++) {
//     thirteenth.push(new Date(year, month, 13));
//   }
//   // return thirteenth.map((day) => day.getDay());
//   return thirteenth.filter((day) => day.getDay() === 5).length;
// }

// let testCases = [1986, 2015, 2017];

// for (const year of testCases) {
//   console.log(fridayThe13ths(year));
// }

// function validation(num) {
//   if ((num % 2 === 0) | /(.).*\1/.test(String(num)) | (num % 7 !== 0)) {
//     return false;
//   } else return true;
// }

// function featured(num) {
//   for (let i = num + 1; i <= 9876543201; i++) {
//     if (validation(i)) {
//       return i;
//     }
//   }
//   return "There is no possible number that fulfills those requirements.";
// }

// let testCases = [
//   12, 20, 21, 997, 1029, 999999, 999999987, 9876543186, 9876543200, 9876543201,
// ];

// for (const num of testCases) {
//   console.log(featured(num));
// }

// function sumSquareDifference(num) {
//   let sum = 0;
//   let squareSum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//     squareSum += i ** 2;
//   }
//   return sum ** 2 - squareSum;
// }

// let testCases = [3, 10, 1, 100];

// for (const num of testCases) {
//   console.log(sumSquareDifference(num));
// }

// function bubbleSort(array) {
//   let sorted;
//   do {
//     sorted = true;
//     for (let i = 1; i <= array.length; i++) {
//       if (array[i] < array[i - 1]) {
//         [array[i], array[i - 1]] = [array[i - 1], array[i]];
//         sorted = false;
//       }
//     }
//   } while (!sorted);
//   return array;
// }

// let cases = [
//   [5, 3],
//   [6, 2, 7, 1, 4],
//   ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"],
// ];

// for (const arr of cases) {
//   console.log(bubbleSort(arr));
// }

// function longestSentence(str) {
//   let sentence = str.match(/\w.*?[.?!]/g);
//   let longest = sentence.reduce(
//     (longest, sentence) => {
//       let length = sentence.split(/\s/).length;
//       if (length > longest.length) {
//         return { text: sentence, length: sentence.length };
//       } else {
//         return longest;
//       }
//     },
//     { text: "", length: 0 }
//   );
//   console.log(longest.text + "\n");
//   console.log("The longest sentence has " + longest.length + " words.\n");
// }
// let longText =
//   "But, in a larger sense, we can not dedicate, we can not consecrate, " +
//   "we can not hallow this ground. The brave men, living and dead, who " +
//   "struggled here, have consecrated it, far above our poor power to add " +
//   "or detract. The world will little note, nor long remember what we say " +
//   "here but it can never forget what they did here. It is for us the " +
//   "living, rather, to be dedicated here to the unfinished work which " +
//   "they who fought here have thus far so nobly advanced. It is rather " +
//   "for us to be here dedicated to the great task remaining before us -- " +
//   "that from these honored dead we take increased devotion to that " +
//   "cause for which they gave the last full measure of devotion -- that " +
//   "we here highly resolve that these dead shall not have died in vain " +
//   "-- that this nation, under God, shall have a new birth of freedom -- " +
//   "and that government of the people, by the people, for the people, " +
//   "shall not perish from the earth.";
// longestSentence(longText);
