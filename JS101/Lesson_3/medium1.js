//Q1
// for (let i = 0; i <= 10; i++) {
//   console.log(" ".repeat(i) + "The Flintstones Rock!");
// }

//Q2
// let munstersDescription = "The Munsters are creepy and spooky.";
// let newMunstersDescription = "";

// munstersDescription.split("").forEach((char) => {
//   if (/[A-Z]/.test(char)) {
//     newMunstersDescription += char.toLowerCase();
//   } else {
//     newMunstersDescription += char.toUpperCase();
//   }
// });

// console.log(newMunstersDescription);

//Q8

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach((familyMember) => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
  // console.log(Object.values(demoObject));
}

messWithDemographics(munsters);

console.log(munsters);
