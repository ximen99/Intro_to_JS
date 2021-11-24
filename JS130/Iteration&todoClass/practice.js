// function forEach(array, callback, context) {
//   for (let index = 0; index < array.length; index += 1) {
//     callback.call(context, array[index], index, array);
//   }
// }

// class Foo {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   showItem(item) {
//     console.log(this.prefix, item);
//   }
// }

// let foo = new Foo("Item: ");

// forEach([1, 2, 3], foo.showItem, foo);

// function filter(arr, callback, context) {
//   let returnArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (callback.call(context, arr[index], index)) {
//       returnArr.push(arr[index]);
//     }
//   }
//   return returnArr;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, (number) => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, (number) => number < 0)); // => []
// console.log(filter(numbers, () => true)); // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, (value) => typeof value === "string"));

// function map(arr, callback, context) {
//   let resultArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     resultArr.push(callback.call(context, arr[index], index, arr));
//   }
//   return resultArr;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, (number) => number * 3)); // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, (number) => number + 1)); // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, (value) => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// function reduce(arr, callback, init) {
//   if (init === undefined) {
//     init = arr[0];
//     arr = arr.slice(1);
//   }

//   let result = init;
//   for (let i = 0; i < arr.length; i++) {
//     result = callback(result, arr[i]);
//   }
//   return result;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number)); // => 15
// console.log(reduce(numbers, (prod, number) => prod * number)); // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3)); // => 360
// console.log(reduce([], (accum, number) => accum + number, 10)); // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(
//   reduce(
//     stooges,
//     (reversedStooges, stooge) => {
//       reversedStooges.unshift(stooge);
//       return reversedStooges;
//     },
//     []
//   )
// );

// function filter(arr, callback) {
//   return arr.reduce((arr, element) => {
//     if (callback(element)) {
//       arr.push(element);
//     }
//     return arr;
//   }, []);
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, (number) => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, (number) => number < 0)); // => []
// console.log(filter(numbers, () => true)); // => [ 1, 2, 3, 4, 5 ]
