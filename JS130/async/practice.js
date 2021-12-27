// function delayLog() {
//   for (var delay = 1; delay <= 10; delay += 1) {
//     setTimeout(() => console.log(delay), delay * 1000);
//   }
// }

// delayLog();

function startCounting() {
  let count = 1;
  let counterId = setInterval(() => {
    console.log(count);
    count = count + 1;
  }, 1000);
  return counterId;
}
function stopCounting(id) {
  clearInterval(id);
}
let counterID = startCounting();
stopCounting(counterID);
