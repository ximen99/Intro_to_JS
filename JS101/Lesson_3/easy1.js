// Q2
// function endWithExclamation(sentence) {
//   if (sentence[sentence.length - 1] === "!") {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Q3
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// ages.hasOwnProperty("Spot");

//Q4
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.
// console.log(
//   munstersDescription[0].toUpperCase() +
//     munstersDescription.slice(1).toLowerCase()
// );

//Q5
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// console.log(Object.assign(ages, additionalAges));

// //Q6
// let str1 =
//   "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// str1.includes("Dino");
// str2.includes("Dino");

// Q8
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");
// flintstones.concat(["Dino", "Happy"]);

//Q10
let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

console.log(advice.slice(0, advice.indexOf("house")));
