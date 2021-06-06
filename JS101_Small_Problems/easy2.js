// function greetings(arr,obj) {
//   return `Hello, ${arr.join(' ')}! Nice to have a ${obj.title} ${obj.occupation} around.`;
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );

// let readlineSync = require("readline-sync");

// let name = readlineSync.question('What is your name? ')

// if (name[name.length-1] === '!') {
//   console.log(`HELLO ${name.toUpperCase().slice(0,name.length-1)}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`); 
// }

// let xor = (a, b) => {
//   let countTrue = [a,b].reduce((count,value) => {if (value) count += 1; return count}, 0);
//   return countTrue === 1;
// }

// console.log(xor(1, 1));

// function oddities(arr) {
//   let keys = Object.keys(arr);
//   let result = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }
//   return result
// }

// console.log(oddities([123]))

function signedIntegerToString (num) {
  let numStr = '0123456789';
  let resultArr = [];
  let sign;

  if (num > 0) {
    sign = '+';
  } else if (num <0 ) {
    sign = '-';
  } 

  num = Math.abs(num);
 
  while (num > 0) {
    resultArr.unshift(numStr[num % 10]);
    num = Math.floor(num/10);
  }

  resultArr.unshift(sign)
  return resultArr.join('')
}

console.log(signedIntegerToString(-123))