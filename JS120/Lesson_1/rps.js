const readline = require("readline-sync");

function createPlayer() {
  return {
    move: null,
  };
}

function createHuman() {
  let playerObject = createPlayer();
  let humanObject = {
    choose() {
      let choice;
      while (true) {
        console.log("Please choose rock, paper, scissors, lizard or spock");
        choice = readline.question();
        if (["rock", "paper", "scissors", "lizard", "spock"].includes(choice))
          break;
        console.log("Sorry, invalid choice.");
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();
  let computerObject = {
    choose() {
      const choices = ["rock", "paper", "scissors", "lizard", "spock"];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  maxWins: 5,
  playerWin: 0,
  computerWin: 1,
  tie: 2,
  outcome: ["player", "computer", "tie"],
  roundWinner: null,
  scoreboard: [0, 0, 0],

  winningCombos: {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  },

  prompt(message) {
    console.log(`=> ${message}`);
  },
  displayWelcomeMessage() {
    this.prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
  },

  displayGoodbyeMessage() {
    this.prompt(
      "Thanks for playing Rock, Paper, Scissors, Lizard, Spock.. Goodbye!"
    );
  },
  determineWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    if (this.winningCombos[humanMove].includes(computerMove)) {
      this.roundWinner = this.outcome[this.playerWin];
    } else if (humanMove === computerMove) {
      this.roundWinner = this.outcome[this.computerWin];
    } else {
      this.roundWinner = this.outcome[this.tie];
    }
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    let winnerIdx = this.outcome.indexOf(this.roundWinner);
    this.prompt(`You chose: ${humanMove}`);
    this.prompt(`The computer chose: ${computerMove}`);

    switch (winnerIdx) {
      case this.playerWin:
        this.prompt("You Win!");
        break;
      case this.computerWin:
        this.prompt("It's a tie");
        break;
      case this.tie:
        this.prompt("You Lose!");
    }
  },

  updateScoreCount() {
    let winnerIdx = this.outcome.indexOf(this.roundWinner);
    this.scoreboard[winnerIdx] += 1;
  },

  playAgain() {
    console.log("Would you like to play again? (y/n)");
    let answer = readline.question();
    return answer.toLowerCase()[0] === "y";
  },

  isSeriesWinner() {
    return this.scoreboard.slice(0, 2).some((num) => num >= 5);
  },
  displayScore() {
    console.log("                      ");
    console.log("  Player1 | Computer | Draw");
    console.log(" _________|__________|_______");
    console.log(
      `     ${this.scoreboard[0]}    |    ${this.scoreboard[1]}     |   ${this.scoreboard[2]}`
    );
    console.log("");
  },
  playSingleRound() {
    this.human.choose();
    this.computer.choose();
    this.determineWinner();
    this.updateScoreCount();
    this.displayWinner();
    this.displayScore();
  },
  displaySeriesWinner() {
    let winnerIdx;
    this.scoreboard.forEach((num, i) => {
      if (num >= 5) {
        winnerIdx = i;
      }
    });
    switch (winnerIdx) {
      case this.playerWin:
        this.prompt("You Win the Game!");
        break;
      case this.computerWin:
        this.prompt("You Lose the Game!");
        break;
      case this.tie:
        this.prompt("It's a tie");
    }
  },
  playSeries() {
    while (!this.isSeriesWinner()) {
      this.playSingleRound();
    }
    this.displaySeriesWinner();
  },
  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.playSeries();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
