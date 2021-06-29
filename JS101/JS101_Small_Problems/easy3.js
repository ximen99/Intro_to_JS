// function crunch(str) {
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     if (result[result.length-1] !== str[i]) {
//       result += str[i];
//     }
//   }
//   return result;
// }

// console.log(crunch('4444abcabccba'));

// function logInBox(str) {
//   const DASH = '-'.repeat(str.length)
//   const BLANK = ' '.repeat(str.length)
//   console.log('+-'+DASH+'-+\n| '+BLANK+' |\n| '+str+' |\n| '+BLANK+' |\n+-'+DASH+'-+');
// }

// logInBox('');

// function stringy(num) {
//   let result = '';
//   if (num % 2 ===0) {
//     result += '10'.repeat(num/2);
//   } else {
//     result += '10'.repeat(Math.floor(num/2)) + '1';
//   }
//   return result;
// }

// console.log(stringy(7));

// function findFibonacciIndexByLength(digit) {
  
//   if (digit === 1n) {
//     return 1n;
//   }

//   let previousIndex = 2n;
//   let numPipe = [1n,1n];
//   let curr

//   while (numPipe[1] < 10n ** (digit-1n)) {
//     curr = numPipe[0] + numPipe[1];
//     numPipe[0] = numPipe[1];
//     numPipe[1] = curr;
//     previousIndex += 1n;
//   }

//   return previousIndex
// }

// console.log(findFibonacciIndexByLength(100n))

// function triangle(num) {

//   for (let i = 1; i <= num; i++) {
//     console.log(' '.repeat(num-i) + '*'.repeat(i));
//   }
// }

// triangle(9);

// function twice(num) {
//   numStr = num.toString();
//   if ((numStr.length % 2 === 0) && (numStr.slice(0,numStr.length/2) === numStr.slice(numStr.length/2))) {
//     return num;
//   } else {
//     return num*2;
//   }
// }

// console.log(twice(103103));

// if ('Four score'.match(/\s/)) {
//   console.log('matched 1');
// }
// if ("Four\tscore".match(/\s/)) {
//   console.log('matched 2');
// }
// if ("Four-score\n".match(/\s/)) {
//   console.log('matched 3');
// }
// if ("Four-score".match(/\s/)) {
//   console.log('matched 4');
// }

// function cleanUp(str){
//   const regex= /[^a-z]+/ig;
//   console.log(str.replace(regex,' '));
// }

// cleanUp("---what's my +*& line?");    

