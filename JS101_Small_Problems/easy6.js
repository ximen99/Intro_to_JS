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

// function sequence(count, num) {
//   let result = [];
//   for (let i = 1; i <= count; i++) {
//     result.push(i * num);
//   }
//   return result;
// }


// console.log(sequence(0, 33));


// function reverseSentence(str) {
//   console.log(str.split(' ').reverse().join(' '));
// }

// reverseSentence('');

// function reverseWords(str) {
//   let strArr = str.split(' ')
//   let resultArr = []
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i].length >= 5) {
//       resultArr.push(strArr[i].split('').reverse().join(''));
//     } else {
//       resultArr.push(strArr[i]);
//     }
//   }
//   return resultArr.join(' ');
// }

// console.log(reverseWords('Walk around the block'));

// function isBalanced(str) {
//   let parArr = str.match(/[()]/g);
//   let expectRight = 0;
//   for (let i = 0; i < parArr.length; i++) {
//     if (expectRight < 0) {
//       return false;
//     }
//     if (parArr[i] === '(') {
//       expectRight += 1;
//     } else {
//       expectRight -= 1;
//     }
//   }
//   if (expectRight !== 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(isBalanced("What ((is))) up("));