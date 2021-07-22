// Q1
let advice =
  "Few things in life are as important as house training your pet dinosaur.";
advice.replace("important", "urgent");
//Q2
let numbers = [1, 2, 3, 4, 5];
numbers.slice().reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
[...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let reverseArray = [];
numbers.forEach((number) => {
  reverseArray.unshift(number);
});

//Q3
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8; // false
let number2 = 95; // true

numbers.includes(number1);

//Q4
let famousWords = "seven years ago...";
"Four score and " + famousWords;
"Four score and ".concat(famousWords);

//Q5
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers); // [1, 2, 4, 5]

//Q6
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

[].concact(...flintstones);
flintstones.reduce((accum, element) => {
  accum.concat(element);
});
let newFlintstones = [];
flintstones.forEach((element) => {
  newFlintstones.concat(element);
});

//Q9
let title = "Flintstone Family Members";
let padNum = Math.floor((40 - title.length) / 2);
title.padStart(padNum + title.length);

//10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split("").reduce((accum, element) => {
  if (element === "t") {
    accum += 1;
  }
}, 0);
