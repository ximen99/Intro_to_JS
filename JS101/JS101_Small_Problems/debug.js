// let ladder = "";

// ["head", "heal", "teal", "tell", "tall", "tail"].forEach((word) => {
//   if (ladder !== "") {
//     ladder += "-";
//   }

//   ladder += word;
// });

// console.log(ladder);

// Picks n random elements from an array,
// and returns a new array with those elements.
// function random(array, n) {
//   if (n === undefined) {
//     n = 1;
//   }

//   let elements = array.slice();
//   let randomElements = [];

//   while (n > 0 && elements.length > 0) {
//     let randomIndex = Math.floor(Math.random() * elements.length);
//     let randomElement = elements[randomIndex];

//     randomElements.push(randomElement);
//     elements.splice(randomIndex, 1);
//     n--;
//   }

//   return randomElements;
// }

// // Ingredients

// let ingredients = [
//   "rice",
//   "green bell pepper",
//   "mushrooms",
//   "carrot",
//   "kebab",
//   "spinach",
//   "soy bean sprouts",
//   "mashed potatoes",
//   "corn",
//   "cucumber",
//   "peas",
// ];

// let spices = [
//   "peri peri",
//   "cinnamon",
//   "nutmeg",
//   "cardamom",
//   "ground ginger",
//   "poppy seed",
//   "cumin",
// ];

// let extras = ["peanuts", "sesame seeds", "egg", "wasabi", "soy sauce"];

// // Name

// let adjective = ["Delicious", "Hot", "Exotic", "Creative", "Festive", "Dark"];
// let firstNoun = ["Power", "After Work", "Holiday", "Disco", "Late Night"];
// let secondNoun = ["Mix", "Delight", "Bowl", "Chunk", "Surprise", "Bliss"];

// // Generate!

// let dishName = random(adjective).concat(random(firstNoun), random(secondNoun));
// let dish = random(ingredients, 3).concat(random(spices, 2), random(extras, 1));

// console.log("How about: " + dishName.join(" "));
// console.log("You need: " + dish.join(", "));

// function range(end, start = 0) {
//   let range = [];

//   for (let element = start; element <= end; element++) {
//     range.push(element);
//   }

//   return range;
// }

// function range(end) {
//   return range(0, end);
// }

// Examples

// console.log(range(20, 10));
// console.log(range(5));

// let memberDirectory = {
//   "Jane Doe": "323-8293",
//   "Margaret Asbury": "989-1111",
//   "Callum Beech": "533-9090",
//   "Juanita Eastman": "424-1919",
// };

// function isValidName(name) {
//   return /^[a-z]+ [a-z]+$/i.test(name);
// }

// function isValidPhone(phone) {
//   return /^\d{3}-\d{4}$/.test(phone);
// }

// function validMemberInfo(name, phone) {
//   return isValidName(name) && isValidPhone(phone);
// }

// function addMember(name, phone) {
//   if (validMemberInfo(name, phone)) {
//     memberDirectory[name] = phone;
//   } else {
//     console.log("Invalid member information.");
//   }
// }

// addMember("Laura Carlisle", "444-2223");
// addMember("Rachel Garcia", "232-1191");
// addMember("Earl 5mith", "331-9191");

// console.log(memberDirectory);

// let d20 = { min: 1, max: 20 };

// function roll(die) {
//   return Math.floor(Math.random() * (die.max - die.min + 1)) + die.min;
// }

// function targetRoll(characterValue) {
//   let result = roll(d20);

//   console.log("--> " + result);

//   switch (result) {
//     case 1:
//       automaticFail();
//       break;
//     case 20:
//       automaticSuccess();
//       break;
//     default:
//       void (result >= characterValue ? success() : fail());
//   }
// }

// function success() {
//   console.log("Your character succeeds.");
// }

// function fail() {
//   console.log("Your character fails.");
// }

// function automaticSuccess() {
//   console.log("Your character succeeds without effort. Glory!");
// }

// function automaticFail() {
//   console.log("Meagre attempt. Your character fails miserably.");
// }

// // Example character.
// let myCharacter = {
//   name: "Jenkins",
//   strength: 4,
//   constitution: 6,
//   education: 11,
//   luck: 3,
//   sanity: 9,
// };

// // Example rolls:

// // Jenkins wants to break in a door with brute force,
// // so he has to roll against his strength value.
// targetRoll(myCharacter.strength);

// // Jenkins found an ancient scroll and attempts to decipher it.
// // He has to roll against his education, in order to determine
// // whether he's able to read it.
// targetRoll(myCharacter.education);

function neutralize(sentence) {
  let words = sentence.split(" ");
  let neutralized = [];
  words.forEach((word) => {
    if (!isNegative(word)) {
      neutralized.push(word);
    }
  });
  return neutralized.join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
