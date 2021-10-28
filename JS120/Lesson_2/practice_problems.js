// let turk = {
//   firstName: "Christopher",
//   lastName: "Turk",
//   occupation: "Surgeon",
//   getDescription() {
//     return (
//       this.firstName + " " + this.lastName + " is a " + this.occupation + "."
//     );
//   },
// };

// function logReturnVal(func) {
//   let returnVal = func.call(turk);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription);

// const TESgames = {
//   titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
//   seriesTitle: "The Elder Scrolls",
//   listGames: function () {
//     let self = this;
//     this.titles.forEach((title) => {
//       console.log(this.seriesTitle + ": " + title);
//     });
//   },
// };

// TESgames.listGames();

// let foo = {
//   a: 0,
//   incrementA: function () {
//     function increment() {
//       this.a += 1;
//     }

//     increment.call(foo);
//   },
// };

// function Ninja() {
//   this.swung = false;
// }
// // Add a swing method to the Ninja prototype which
// // modifies `swung` and returns the calling object
// Ninja.prototype.swing = function () {
//   this.swung = true;
//   return this;
// };
// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung); // logs `true`
// console.log(ninjaB.swing().swung);

// let ninjaA;

// {
//   const Ninja = function () {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }

// let ninjaB = new ninjaA.constructor();
// // create a `ninjaB` object here; don't change anything else

// console.log(ninjaA.hasOwnProperty("prototype")); // => true

// function createPet(animal, name) {
//   return {
//     animal,
//     name,
//     sleep() {
//       console.log("I am sleeping");
//     },
//     wake() {
//       console.log("I am awake");
//     },
//   };
// }

// const PetPrototype = {
//   sleep() {
//     console.log("I am sleeping");
//   },
//   wake() {
//     console.log("I am awake");
//   },
//   init(animal, name) {
//     this.animal = animal;
//     this.name = name;
//     return this;
//   },
// };

// class Greeting {
//   greet(str) {
//     console.log(str);
//   }
// }
// class Hello extends Greeting {
//   hi() {
//     this.greet("Hello");
//   }
// }
// class Goodbye extends Greeting {
//   bye() {
//     this.greet("Goodbye");
//   }
// }
function Person(name) {
  this.name = name;
  this.school = undefined;
}

Person.prototype.speak = function () {
  return `Hello, my name is ${this.name}.`;
};

function Child(name, school) {
  Person.call(this, name);
  this.school = school;
}

Child.prototype = Object.create(Person);
Child.prototype.constructor = Child;

Child.prototype.learn = function () {
  return "I'm going to school!";
};

let child = new Child("Suzy", "PS 33");
console.log(child instanceof Child); // true
console.log(child instanceof Person); // true
console.log(Object.getPrototypeOf(child) === Child.prototype); // true
console.log(Object.getPrototypeOf(child).constructor === Child); // true
console.log(child.school === "PS 33"); // true
console.log(child.learn() === "I'm going to school!"); // true
console.log(child.speak() === "Hello, my name is Suzy."); // true
console.log();

let person = new Person("Pete");
console.log(person instanceof Child === false); // true
console.log(person instanceof Person); // true
console.log(Object.getPrototypeOf(person) === Person.prototype); // true
console.log(Object.getPrototypeOf(person).constructor === Person); // true
console.log(person.school === undefined); // true
console.log(person.speak() === "Hello, my name is Pete."); // true
console.log(person.learn === undefined); // true
