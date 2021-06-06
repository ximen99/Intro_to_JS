// function reverseNumber(num) {
//   let numStr = String(num);
//   let result = '';
//   for (let i = numStr.length-1; i>=0; i--) {
//     result += numStr[i];
//   }
//   console.log(Number(result));
// }

// reverseNumber(12213)

// function doubleConsonants(str) {
//   let result = str.split('').map(chr => {if (chr.match(/[^aeiou0-9\s_\-!,.]/g)) {return chr.repeat(2)} else {return chr}}).join('');
//   console.log(result);
// }

// doubleConsonants('Hello-World!');

// function centerOf(str) {
//   if (str.length % 2 === 0) {
//     return str.slice(str.length/2-1,str.length/2+1);
//   } else {
//     return str.slice(Math.floor(str.length/2),Math.floor(str.length/2)+1)
//   }
// }

// console.log(centerOf('x'));

