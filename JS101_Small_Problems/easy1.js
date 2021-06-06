// function isOdd(num) {
//   return Math.abs(num) % 2 !== 0;
// }

// console.log(isOdd(0))

// function logOdd(){
//   for (let i = 1; i<= 99; i+=2 ){

//       console.log(i);
    
//   }
// }

// logOdd()

// function logEven(){
//   for (let i = 2; i<= 99; i+=2 ){

//       console.log(i);
    
//   }
// }

// logEven()


// let readlineSync = require("readline-sync");

// const SQMETERS_TO_SQFEET = 10.7639;

// console.log("Enter the length of the room in meters:");
// let length = readlineSync.prompt();
// length = parseInt(length, 10);

// console.log("Enter the width of the room in meters:");
// let width = readlineSync.prompt();
// width = parseInt(width, 10);

// let areaInMeters = (length * width);
// let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

// console.log(
//   `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
// );


// let readlineSync = require("readline-sync");

// let bill = parseFloat(readlineSync.question('What is the bill? '))
// let tipPct = parseFloat(readlineSync.question('What is the tip percentage? '))

// console.log(`The tip is $${(bill*tipPct/100).toFixed(2)}\nThe Total is $${(bill*(tipPct/100+1)).toFixed(2)}`)


// let readlineSync = require("readline-sync");

// let num = parseInt(readlineSync.question('Please enter an integer greater than 0: '));
// let operation = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
// let numArr = Array.from(Array(num), (_,index) => index+1);
// let result

// if (operation === 'p') {
//   result = numArr.reduce((cum, value) => cum * value);
//   console.log(`The sum of the integers between 1 and ${num} is ${result}.`);
// } else if (operation === 's') {
//   result = numArr.reduce((cum, value) => cum + value);
//   console.log(`The sum of the integers between 1 and ${num} is ${result}.`);
// }  else {
//   console.log("Oops. Unknown operation.");
// }

// function shortLongShort(s1,s2) {
//   if (s1.length > s2.length) {
//     console.log(s2+s1+s2);
//   } else {
//     console.log(s1+s2+s1);
//   }
// }

// shortLongShort('abcde', 'fgh'); 

// function isLeapYear(yr) {
//   if (typeof yr === 'number' && yr > 0){
//     if (yr % 4 === 0) {
//       if (yr % 100 === 0){
//         if (yr % 400 === 0){
//           return true;
//         }
//         return false;
//       }
//       return true;
//     }
//     return false;
//   } else {
//     return 'Please input number over 0';
//   }
// }

// console.log(isLeapYear(2000));

// function multisum(num) {
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result += i;
//     }
//   }
//   return result;
// }

// console.log(multisum(1000));

function utf16Value(str) {
  let strLen = str.length;
  let result = 0;
  if (strLen === 0 ){
    return 0;
  } else {
    for (let i = 0; i <strLen; i++) {
      result += str.charCodeAt(i);
    }
    return result;
  }
}

console.log(utf16Value(''));


