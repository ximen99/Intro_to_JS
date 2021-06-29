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

// function swapCase(sentence) {
//   return sentence.replace(/[a-z]/ig, letter => {
//     if (letter.match(/[a-z]/)) {
//       return letter.toUpperCase();
//     } else {
//       return letter.toLowerCase();
//     }
//   });
// }

// console.log(swapCase('CamelCase'));

// function staggeredCase(sentence) {
//   let charIndex = 0;
//   return sentence
//     .split('')
//     .map(char => {
//       if (/[a-z]/i.test(char)) {
//         if (charIndex % 2 === 0) {
//           charIndex += 1;
//           return char.toUpperCase();
//         } else {
//           charIndex += 1;
//           return char.toLowerCase();
//         }
//       }
//       return char;
//     })
//     .join('');
// }

// console.log(staggeredCase('ignore 77 the 444 numbers'));

// function wordLengths(sentence) {
//   if (arguments.length === 0 || sentence.length === 0) {
//     return [];
//   }

//   let result = [];
//   sentence.split(' ')
//     .forEach(element => {
//       result.push(`${element} ${element.length}`)
//     });
//   return result;
// }

// console.log(wordLengths("It ain't easy, is it?"));

// function searchWord(keyWord, sentence) {
//   let regex = new RegExp(keyWord, "ig");
//   return sentence.replace(regex, `##${keyWord.toUpperCase()}##`);
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));


