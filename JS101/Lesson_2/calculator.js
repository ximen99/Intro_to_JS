const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");
const LANGUAGE = "en";

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
}

prompt(messages("welcome"));

while (true) {
  prompt("What's your first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt("What's your second number?");
  let number2 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt(
    "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
  );
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("Must choose 1, 2, 3 or 4");
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`the result is ${output}`);

  prompt("Would you like to perform another operation? (y/n)");
  let answer = readline.question();

  if (answer !== "y") break;
}
