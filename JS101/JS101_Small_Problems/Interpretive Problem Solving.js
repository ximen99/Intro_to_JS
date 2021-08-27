// function lightsOn(switches) {
//   let onList = [];

//   function updateOnList(count, upperBound) {
//     for (let i = count; i <= upperBound; i += count) {
//       if (onList.includes(i)) {
//         onList.splice(onList.indexOf(i), 1);
//       } else {
//         onList.push(i);
//       }
//     }
//   }

//   for (let i = 1; i <= switches; i++) {
//     updateOnList(i, switches);
//   }
//   return onList;
// }

// console.log(lightsOn(100));

// function diamond(count) {
//   for (var i = 1; i <= count; i++) {
//     let starCount = i * 2 - 1;
//     let starStr;
//     if (starCount <= count) {
//       starStr = "*".repeat(starCount);
//     } else {
//       starStr = "*".repeat(count - (starCount - count));
//     }
//     let blank = " ".repeat((count - starStr.length) / 2);
//     console.log(blank + starStr + blank);
//   }
// }

// diamond(9);

// function isBlockWord(word) {
//   let block = [
//     ["B", "O"],
//     ["X", "K"],
//     ["D", "Q"],
//     ["C", "P"],
//     ["N", "A"],
//     ["G", "T"],
//     ["R", "E"],
//     ["F", "S"],
//     ["J", "W"],
//     ["H", "U"],
//     ["V", "I"],
//     ["L", "Y"],
//     ["Z", "M"],
//   ];
//   for (const arr of block) {
//     let include = false;
//     for (const char of word) {
//       if (arr.includes(char.toUpperCase())) {
//         if (include) {
//           return false;
//         } else {
//           include = true;
//         }
//       }
//     }
//   }
//   return true;
// }

// console.log(isBlockWord("apple"));

function star(n) {
  let midIdx = (n + 1) / 2;
  let leftPad;
  let midSpaces;
  for (let i = 1; i <= n; i++) {
    if (i < midIdx) {
      leftPad = i - 1;
      midSpaces = (n - leftPad * 2 - 3) / 2;
      console.log(
        " ".repeat(leftPad) +
          "*" +
          " ".repeat(midSpaces) +
          "*" +
          " ".repeat(midSpaces) +
          "*"
      );
    } else if (i === midIdx) {
      console.log("*".repeat(n));
    } else {
      leftPad = n - i;
      midSpaces = (n - leftPad * 2 - 3) / 2;
      console.log(
        " ".repeat(leftPad) +
          "*" +
          " ".repeat(midSpaces) +
          "*" +
          " ".repeat(midSpaces) +
          "*"
      );
    }
  }
}

star(9);
