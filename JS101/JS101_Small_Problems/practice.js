/*
input: string
output: string of integers seperated by space.
rules: order letters in the string in alphabetic order with out space. 
       order should be case insensitive. but keep orvional case in the result
       remove all puc, space
example: 
      "a a a  b  c c  d d d d  e e e e e"
algo:
      regex to pick out all letters and turn to array of char.
      copy the array and turn everythign to lowercase.
      sort the array with the order of lowercase array char alphabetic order
      join the array into string
      return string

*/

function alphabetized(s) {
  sArr = s.match(/[a-z]/gi);
  console.log(sArr);
  sArr.sort(
    (a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)
  );
  return sArr.join("");
}
console.log(alphabetized("The Holy Bible"));
// console.log(differenceCount("hackerrank", "codewars"));
