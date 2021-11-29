// function myBind(func, context, arg) {
//   return function newFunc() {
//     return func.apply(context, [arg, ...arguments]);
//   };
// }

// function newStack() {
//   let stackArr = [];
//   return {
//     push(element) {
//       stackArr.push(element);
//     },
//     pop() {
//       stackArr.pop();
//     },
//     printStack() {
//       console.log(stackArr);
//     },
//   };
// }

// function delegate(obj, key, ...args) {
//   return function () {
//     return obj[key](...args);
//   };
// }

// let Account = (function () {
//   let userEmail;
//   let userPassword;
//   let userFirstName;
//   let userLastName;

//   function isValidPassword(testPassword) {
//     return userPassword === testPassword;
//   }

//   function getRandomLetterNumber() {
//     let randomIndex = Math.floor(Math.random() * 62);
//     return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890"[
//       randomIndex
//     ];
//   }

//   function anonymize() {
//     let result = "";

//     for (let i = 0; i < 16; i += 1) {
//       result += getRandomLetterNumber();
//     }

//     return result;
//   }

//   return {
//     init: function (email, password, firstName, lastName) {
//       userEmail = email;
//       userPassword = password;
//       userFirstName = firstName;
//       userLastName = lastName;
//       this.displayName = anonymize();
//       return this;
//     },

//     reanonymize: function (password) {
//       if (isValidPassword(password)) {
//         this.displayName = anonymize();
//         return true;
//       } else {
//         return "Invalid Password";
//       }
//     },

//     resetPassword: function (currentPassword, newPassword) {
//       if (isValidPassword(currentPassword)) {
//         userPassword = newPassword;
//         return true;
//       } else {
//         return "Invalid Password";
//       }
//     },

//     firstName: function (password) {
//       if (isValidPassword(password)) {
//         return userFirstName;
//       } else {
//         return "Invalid Password";
//       }
//     },

//     lastName: function (password) {
//       if (isValidPassword(password)) {
//         return userLastName;
//       } else {
//         return "Invalid Password";
//       }
//     },

//     email: function (password) {
//       if (isValidPassword(password)) {
//         return userEmail;
//       } else {
//         return "Invalid Password";
//       }
//     },
//   };
// })();

// const ItemManager = (function () {
//   function validateItemName(name) {
//     return String(name).match(/\S+/gi).join().length >= 5;
//   }
//   function validateCategory(category) {
//     return /^\S{5,}$/.test(String(category));
//   }
//   function validateQuantity(quantity) {
//     return quantity !== undefined;
//   }
//   function itemCreator(itemName, category, quantity) {
//     let skuCode =
//       itemName.match(/\S+/gi).join().slice(0, 3) + category.slice(0, 2);
//     skuCode = skuCode.toUpperCase();
//     return {
//       skuCode,
//       itemName,
//       category,
//       quantity,
//     };
//   }
//   return {
//     items: [],
//     create(itemName, category, quantity) {
//       let valid =
//         validateItemName(itemName) &&
//         validateCategory(category) &&
//         validateQuantity(quantity);
//       if (valid) {
//         this.items.push(itemCreator(itemName, category, quantity));
//       } else return false;
//     },
//     update(skuCode, obj) {
//       this.items.forEach((item) => {
//         if (item.skuCode === skuCode) {
//           Object.assign(item, obj);
//         }
//       });
//     },
//     delete(skuCode) {
//       this.items = this.items.filter((item) => item.skuCode !== skuCode);
//     },
//     inStock() {
//       return this.items.filter((item) => item.quantity > 0);
//     },
//     itemsInCategory(category) {
//       return this.items.filter((item) => item.category === category);
//     },
//   };
// })();

// const ReportManager = {
//   init(ItemManager) {
//     this.items = ItemManager;
//   },
//   createReporter(skuCode) {
//     let itemArr = this.items.items.filter((item) => item.skuCode === skuCode);
//     return {
//       itemInfo() {
//         itemArr.forEach((item) => {
//           for (key in item) {
//             console.log(`${key}: ${item[key]}`);
//           }
//         });
//       },
//     };
//   },
//   reportInStock() {
//     let namesStr = this.items
//       .inStock()
//       .map((item) => item.itemName)
//       .join(",");
//     console.log(namesStr);
//   },
// };

// ItemManager.create("basket ball", "sports", 0); // valid item
// ItemManager.create("asd", "sports", 0);
// ItemManager.create("soccer ball", "sports", 5); // valid item
// ItemManager.create("football", "sports");
// ItemManager.create("football", "sports", 3); // valid item
// ItemManager.create("kitchen pot", "cooking items", 0);
// ItemManager.create("kitchen pot", "cooking", 3); // valid item
// // returns list with the 4 valid items
// console.log(ItemManager.items);

// ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
// ReportManager.reportInStock();

// ItemManager.update("SOCSP", { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
// console.log(ItemManager.inStock());
// // football,kitchen pot
// ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
// console.log(ItemManager.itemsInCategory("sports"));

// ItemManager.delete("SOCSP");
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
// console.log(ItemManager.items);

// let kitchenPotReporter = ReportManager.createReporter("KITCO");
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update("KITCO", { quantity: 10 });
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10

function xyzzy(msg, foo, bar, qux) {
  return {
    foo: foo,
    bar: bar,
    qux: qux,
    log: function () {
      console.log(msg);
    },
  };
}

xyzzy(1, 2, 3, 4).log();
