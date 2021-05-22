function evenOrOdd(value){
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (value%2 ===0){
    console.log('even');
  } else {
    console.log('odd');
  }

}

function Up(words){
  if (words.length > 10){
    return words.toUpperCase();
  } else {
    return words;
  }
}

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}