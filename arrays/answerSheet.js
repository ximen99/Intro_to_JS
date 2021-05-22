// Anser for Q3

// function log_even (i){
//   if (Array.isArray(i)) {
//     i.forEach(log_even);
//   }
//   if (i % 2 === 0){
//     console.log(i);
//   }
// }

// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// myArray.forEach(log_even);


// Anser for Q4

// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// console.log(myArray.map(i =>(i % 2 ===0) ? 'even' : 'odd'));

// console.log(myArray.map(function(value) {
//   if (value % 2 === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// }));

// Anser for Q6

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// console.log(arr.filter(i => i.length % 2 !== 0).map(i => i.length))

// Anser for Q8

let get_odd = (accumulator, current) => {
  if (current.length % 2 !== 0) {
    accumulator.push(current.length);
  }
  return accumulator;
}

console.log(arr.reduce(get_odd,[]));