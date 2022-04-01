// const download1 = new Promise((resolve, reject) => {
//   // code to download image 1
//   resolve("Image 1 downloaded");
// });

// const download2 = new Promise((resolve, reject) => {
//   // code to download image 2
//   resolve("Image 2 downloaded");
// });

// const download3 = new Promise((resolve, reject) => {
//   // code to download image 3
//   resolve("Image 3 downloaded");
// });

// Promise.all([download1, download2, download3]).then((messages) =>
//   console.log(messages)
// );

// function randomizer(...callbacks) {
//   if (callbacks.length < 1) {
//     return;
//   }

//   const secondsEnd = 2 * callbacks.length;
//   let secondsElapsed = 0;

//   const timeLogger = setInterval(() => {
//     secondsElapsed += 1;
//     console.log(secondsElapsed);

//     if (secondsElapsed >= secondsEnd) {
//       clearInterval(timeLogger);
//     }
//   }, 1000);

//   callbacks.forEach((callback) => {
//     const executeTime = Math.floor(Math.random() * secondsEnd * 1000);
//     setTimeout(callback, executeTime);
//   });
// }

// function delegateEvent(parentElement, selector, eventType, callback) {
//   if (parentElement && parentElement instanceof Element) {
//     return !parentElement.addEventListener(eventType, (event) => {
//       const validTargets = Array.prototype.slice.call(
//         parentElement.querySelectorAll(selector)
//       );
//       if (validTargets.includes(event.target)) {
//         callback(event);
//       }
//     });
//   }
// }

// const divRed = document.querySelector("#red");
// const divBlue = document.querySelector("#blue");
// const divOrange = document.querySelector("#orange");
// const divGreen = document.querySelector("#green");

// const tracker = (() => {
//   const events = [];
//   return {
//     list() {
//       return events.slice();
//     },
//     elements() {
//       return this.list().map(({ target }) => target);
//     },
//     add(event) {
//       events.push(event);
//     },
//     clear() {
//       events.length = 0;
//       return events.length;
//     },
//   };
// })();

// function track(callback) {
//   function isEventTracked(events, event) {
//     return events.includes(event);
//   }

//   return (event) => {
//     if (!isEventTracked(tracker.list(), event)) {
//       tracker.add(event);
//     }

//     callback(event);
//   };
// }

// divRed.addEventListener(
//   "click",
//   track((event) => {
//     document.body.style.background = "red";
//   })
// );

// divBlue.addEventListener(
//   "click",
//   track((event) => {
//     event.stopPropagation();
//     document.body.style.background = "blue";
//   })
// );

// divOrange.addEventListener(
//   "click",
//   track((event) => {
//     document.body.style.background = "orange";
//   })
// );

// divGreen.addEventListener(
//   "click",
//   track((event) => {
//     document.body.style.background = "green";
//   })
// );
