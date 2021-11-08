// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }
//   getWidth() {
//     return this.width;
//   }
//   getLength() {
//     return this.length;
//   }
//   getArea() {
//     return this.width * this.length;
//   }
// }

// class Square extends Rectangle {
//   constructor(width) {
//     super(width, width);
//   }
// }

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype);
// console.log(fakeCat);

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, type) {
//     super(name, age);
//     this.type = type;
//   }
//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.type} fur.`;
//   }
// }

// let pudding = new Cat("Pudding", 7, "black and white");
// let butterscotch = new Cat("Butterscotch", 10, "tan and white");

// console.log(pudding.info());
// console.log(butterscotch.info());

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, "cat", status);
//   }
//   introduce() {
//     return super.introduce() + " Meow meow!";
//   }
// }

// let cat = new Cat("Pepe", 2, "happy");
// console.log(
//   cat.introduce() ===
//     "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!"
// );
// // logs true
// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, "dog", status);
//     this.master = master;
//   }
//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`;
//   }
// }

// class vehicle {
//   constructor(make, model, wheelsCount) {
//     this.make = make;
//     this.model = model;
//     this.wheelsCount = wheelsCount;
//   }
//   info() {
//     return `${this.make} ${this.model}`;
//   }
//   getWheels() {
//     return this.wheelsCount;
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model) {
//     super(make, model, 4);
//   }

//   getWheels() {
//     return 4;
//   }
// }

// class Motorcycle {
//   constructor(make, model) {
//     super(make, model, 2);
//   }
// }

// class Truck {
//   constructor(make, model, payload) {
//     super(make, model, 4);
//     this.payload = payload;
//   }
// }

// class Person {
//   greeting(text) {
//     console.log(text);
//   }
// }
// class Shouter extends Person {
//   greeting(text) {
//     super.greeting(text.toUpperCase());
//   }
// }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "strolls";
//   }
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "saunters";
//   }
// }

// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "runs";
//   }
// }

// const walkMixin = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   },
// };

// Object.assign(Person.prototype, walkMixin);
// Object.assign(Cat.prototype, walkMixin);
// Object.assign(Cheetah.prototype, walkMixin);

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

// class Pet {
//   constructor(type, name) {
//     this.type = type;
//     this.name = name;
//   }
//   toString() {
//     return `a ${this.type} named ${this.name}`;
//   }
// }

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }
//   numberOfPets() {
//     return this.pets.length;
//   }
// }

// class Shelter {
//   constructor(name) {
//     this.adopts = {};
//   }
//   adopt(owner, pet) {
//     owner.pets.push(pet);
//     if (!this.adopts[owner.name]) {
//       this.adopts[owner.name] = [pet];
//     } else {
//       this.adopts[owner.name].push(pet);
//     }
//   }
//   printAdoptions() {
//     for (let name in this.adopts) {
//       this.printAdoption(name, this.adopts[name]);
//       console.log("");
//     }
//   }
//   printAdoption(name, pets) {
//     console.log(`${name} has adopted the following pets:`);
//     pets.forEach((pet) => {
//       console.log(pet.toString());
//     });
//   }
// }

// let butterscotch = new Pet("cat", "Butterscotch");
// let pudding = new Pet("cat", "Pudding");
// let darwin = new Pet("bearded dragon", "Darwin");
// let kennedy = new Pet("dog", "Kennedy");
// let sweetie = new Pet("parakeet", "Sweetie Pie");
// let molly = new Pet("dog", "Molly");
// let chester = new Pet("fish", "Chester");

// let phanson = new Owner("P Hanson");
// let bholmes = new Owner("B Holmes");

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

// class Banner {
//   constructor(message) {
//     this.message = message;
//   }

//   displayBanner() {
//     console.log(
//       [
//         this.horizontalRule(),
//         this.emptyLine(),
//         this.messageLine(),
//         this.emptyLine(),
//         this.horizontalRule(),
//       ].join("\n")
//     );
//   }

//   horizontalRule() {
//     return "+-" + "-".repeat(this.message.length) + "-+";
//   }

//   emptyLine() {
//     return "| " + " ".repeat(this.message.length) + " |";
//   }

//   messageLine() {
//     return `| ${this.message} |`;
//   }
// }

// let banner1 = new Banner("To boldly go where no one has gone before.");
// banner1.displayBanner();
// let banner2 = new Banner("");
// banner2.displayBanner();

function generateName() {
  // make sure to check the name is unique via the photoManager object
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let str = "";

  for (let i = 1; i <= 6; i++) {
    str += CHARS[Math.floor(CHARS.length * Math.random)];
  }

  return str;
}

console.log(generateName());
