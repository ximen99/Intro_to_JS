// function isUpperCase(str) {
//   return str.toUpperCase() === str;
// }

// function removeVowels(strArr) {
//   return strArr.map(word => word.split('').filter(
//     element => !'aeiouAEIOU'.includes(element)
//   ).join(''));
// }

// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));

// function letterCaseCount(str) {
//   result = {
//     lowercase: str.match(/[a-z]/g).length,
//     uppercase: str.match(/[A-Z]/g).length,
//     neither: str.match(/[^a-zA-Z]/g).length
//   };
//   return result;
// }

// console.log(letterCaseCount('abCdef 123'));

// function wordCap(str) {
//   return str.split(' ').map(word => {
//     return word.replace(word.slice(0, 1), letter => {
//       if (letter.match(/[a-z]/)) {
//         return letter.toUpperCase();
//       } else {
//         return letter
//       }
//     })
//   }).join(' ');
// }

// console.log(wordCap('this is a "quoted" word'));

function swapCase(sentence) {
  return sentence.replace(/[a-z]/ig, letter => {
    if (letter.match(/[a-z]/)) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  });
}

console.log(swapCase('CamelCase'));