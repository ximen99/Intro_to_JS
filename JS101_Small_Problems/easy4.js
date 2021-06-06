// function isPalindrome(text){
  
//   for (let i = 0; i<text.length; i++) {
//     if (text[i] !== text[text.length-i-1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrome("madam i'm adam"));


// function isRealPalindrome(text) {
//   const regex = /[^A-Za-z0-9]/ig;
//   text = text.replace(regex,'').toLowerCase();
//   return text === text.split('').reverse().join('')
// }

// console.log(isRealPalindrome("356a653"));

// function runningTotal(numbers) {
//   let cum = 0;
//   for (let i=0; i<numbers.length; i++) {
//     cum += numbers[i];
//     numbers[i] = cum;
//   }
//   return numbers
// }

// console.log(runningTotal([]));

function wordSizes(text) {
  let words = text.split(' ');
  let dic = {};

  for (let i =0; i < words.length; i++ ){
    if (words[i].length === 0) {
      continue;
    }

    if (dic[words[i].length]){
      dic[words[i].length] += 1;
    } else {
      dic[words[i].length] = 1; 
    }
    
  }
  return dic
}

console.log(wordSizes(''));