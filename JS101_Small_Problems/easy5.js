// function dms(angle) {
//   let degree = Math.floor(angle);
//   let min = Math.floor((angle - degree)*60);
//   let sec = Math.floor(((angle - degree)*60-min)*60)

//   console.log(`${degree}°${pad_zero(min)}"${pad_zero(sec)}`)
// }

// function pad_zero(num) {
//     let stringNum = String(num);
//     if (stringNum.length<2) {
//       stringNum = '0' + stringNum;
//     }
//     return stringNum
// }

// dms(360);


// function union(arr1, arr2) {
//   let result = [];
//   result = result.concat(arr1);
//   result = result.concat(uniqueArr(arr2,arr1));
//   return result;
// }

// function uniqueArr (arr1,arr2) {
//   return arr1.filter(element => (!arr2.includes(element)));
// }

// console.log(union([1, 3, 5], [3, 6, 9]));

// function halvsies (arr) {
//   if (arr.length ===0) {
//     return [[],[]];
//   } else if (arr.length ===1) {
//     return [arr,[]];
//   } else {
//     let mid_id = (arr.length % 2 === 0? arr.length/2: Math.floor(arr.length/2)+1);
//     return [arr.slice(0,mid_id),arr.slice(mid_id,arr.length)];
//   }
// }

// console.log(halvsies([]));

// function timeOfDay(timeInMinutes) {
//   const MINUTES_IN_DAY = 24*60
  
//   let time = timeInMinutes % MINUTES_IN_DAY
  
//   let min = time >=0 ? time % 60: 60 + time % 60;
//   let hour = Math.floor(time/60) %24 >=0 ? Math.floor(time/60) % 24 : Math.floor(time/60) %24+24;

//   console.log(`${String(hour).padStart(2,'0')}:${String(min).padStart(2,'0')}`);
// }

// timeOfDay(800);

// function afterMidnight(time) {
//   let hour = Number(time.slice(0,2));
//   let min = Number(time.slice(2,4));

//   return hour*60+min

// }