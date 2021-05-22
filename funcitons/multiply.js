

function multiply(){
  let readLineSync = require('../input_output/node_modules/readline-sync');
  let firstNum = parseFloat(readLineSync.question(`Enter the first number: `));
  let secondNum = parseFloat(readLineSync.question(`Enter the second number: `));
  console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
}

multiply()