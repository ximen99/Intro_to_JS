const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  // check if it's a valid number
  let invalidStatus =
    number.trimStart() === "" ||
    Number.isNaN(Number(number)) ||
    Number(number) < 0;
  // instruction prompt
  let inputInstruction = "Please input a number over 0!";
  return [invalidStatus, inputInstruction];
}

function invalidRate(number) {
  // check if it's a valid number
  let validStatus =
    number.trimStart() === "" ||
    Number.isNaN(Number(number)) ||
    Number(number) > 50 ||
    Number(number) < 0;
  // instruction prompt
  let inputInstruction =
    "Please input annual loan interest rate, it should be normally between 0 to 50";
  return [validStatus, inputInstruction];
}

function invalidDuration(number) {
  // check if it's a valid number
  let validStatus =
    number.trimStart() === "" ||
    Number.isNaN(Number(number)) ||
    Number(number) > 30 ||
    Number(number) < 0;
  // instruction prompt
  let inputInstruction =
    "Please input a valid loan duration in years, it should be normally between 0 to 50 years";
  return [validStatus, inputInstruction];
}

function validateNumber(message, validFun) {
  // prompt to ask user for input
  prompt(message);
  let number = readline.question();
  // validate number
  let [validStatus, inputInstruction] = validFun(number);
  // check number validation status if not ask user to input number again until it's valid
  while (validStatus) {
    prompt(inputInstruction);
    number = readline.question();
    validStatus = validFun(number)[0];
  }
  return number;
}

while (true) {
  // ask for loan amount
  let loanAmount = validateNumber("Please input loan amount", invalidNumber);
  // ask for APR
  let monthly_payment_rate =
    validateNumber("Please input annual interest rate", invalidRate) / 100 / 12;
  // ask for loan duration
  let loanDuration =
    validateNumber("Please input loan duration in years", invalidDuration) * 12;

  let monthlyPayment =
    loanAmount *
    (monthly_payment_rate /
      (1 - Math.pow(1 + monthly_payment_rate, -loanDuration)));
  // log payment
  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)} dollars`);
  // ask to see if user want to continue next calculation
  prompt("Do you need another calculation? [y/n]");
  let answer = readline.question();
  if (answer !== "y") break;
}
