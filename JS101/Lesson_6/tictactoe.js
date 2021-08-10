let readline = require("readline-sync");

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const WIN_MATCH_NUM = 5;
const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // rows
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // columns
  [1, 5, 9],
  [3, 5, 7], // diagonals
];

function prompt(str) {
  console.log(`=> ${str}`);
}

function displayBoard(board) {
  // console.clear();

  console.log(`You are ${HUMAN_MARKER}, computer is ${COMPUTER_MARKER}`);

  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

function initBoard() {
  let board = {};
  for (let i = 1; i <= 9; i++) {
    board[String(i)] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
}

function joinOr(numLs, regSep = ", ", endSep = "or") {
  if (numLs.length === 0) {
    return "";
  } else {
    let result = String(numLs[0]);
    for (let i = 1; i < numLs.length; i++) {
      // determine if it's the last word
      if (i === numLs.length - 1) {
        // determine if there's only two elements in the list
        if (numLs.length === 2) {
          result += " " + endSep + " " + String(numLs[i]);
        } else {
          result += regSep + endSep + " " + String(numLs[i]);
        }
      } else {
        result += regSep + String(numLs[i]);
      }
    }
    return result;
  }
}

function playerChooseSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square among (${joinOr(emptySquares(board))})`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) {
      break;
    } else {
      prompt("Sorry, that's not a valid choice.");
    }
  }

  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board) {
  let lineMarker = line.map((index) => board[index]);

  if (
    lineMarker.filter((marker) => marker === HUMAN_MARKER).length === 2 ||
    lineMarker.filter((marker) => marker === COMPUTER_MARKER).length === 2
  ) {
    let unusedSquare = line.find((index) => board[index] === INITIAL_MARKER);
    return unusedSquare;
  }
  return undefined;
}

function findMove(board) {
  let defenseSquare;
  for (let i = 0; i < WINNING_LINES.length; i++) {
    defenseSquare = findAtRiskSquare(WINNING_LINES[i], board);
    if (defenseSquare) {
      return defenseSquare;
    }
  }
  return defenseSquare;
}

function computerChooseSquare(board) {
  let move_square = findMove(board);
  if (!move_square) {
    if (board["5"] === INITIAL_MARKER) {
      move_square = "5";
    } else {
      let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
      move_square = emptySquares(board)[randomIndex];
    }
  }
  board[move_square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    let [sq1, sq2, sq3] = WINNING_LINES[i];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }
  return null;
}

function displayScore(score) {
  console.log("Score");
  console.log(`Player: ${score.Player}`);
  console.log(`Computer: ${score.Computer}`);
}

function chooseFirst() {
  let playerFirst;

  while (true) {
    prompt('Please choose who go first ("player","computer","choose")');
    first = readline.question().trim();
    if (["player", "computer", "choose"].includes(first.toLowerCase())) {
      break;
    }
  }

  if (first === "choose") {
    playerFirst = ["player", "computer"][Math.round(Math.random())];
  } else {
    playerFirst = first;
  }

  if (playerFirst) {
    prompt("Player will go first!");
  } else {
    prompt("Computer will go first!");
  }

  return playerFirst;
}

function displayGameWinner(board, score) {
  if (someoneWon(board)) {
    let winner = detectWinner(board);
    prompt(`${winner} is winner!`);
    score[winner] += 1;
  } else {
    prompt("it's a tie!");
  }
}

function playAgain() {
  let answer;
  while (true) {
    prompt("Do you want to play again? (y/n)");
    answer = readline.question().toLowerCase()[0];
    if ("yn".includes(answer)) {
      break;
    } else {
      prompt("Not a valid answer, please choose between y or n");
    }
  }
  return answer;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer == "player") {
    playerChooseSquare(board);
  } else {
    computerChooseSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer == "player") {
    return "computer";
  } else {
    return "player";
  }
}

function winMatch(score) {
  // check match winner
  if (score.Player >= WIN_MATCH_NUM) {
    prompt(`Player won the match!`);
    return true;
  } else if (score.Computer >= WIN_MATCH_NUM) {
    prompt(`Computer won the match!`);
    return true;
  }
}

// main match Loop
while (true) {
  let score = {
    Player: 0,
    Computer: 0,
  };

  let currentPlayer = chooseFirst();

  // each game Loop
  while (true) {
    let board = initBoard();
    displayBoard(board);

    while (true) {
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      displayBoard(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayGameWinner(board, score);

    displayScore(score);

    if (winMatch(score)) {
      break;
    }
  }
  if (playAgain() !== "y") break;
}
