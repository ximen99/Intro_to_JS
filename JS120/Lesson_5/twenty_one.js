/* 
Twenty-One is a card game with a dealer and a player.
The participants try to get as close to 21 points as possible without going over.
The game starts by dealing cards from a 52-card deck consisting of cards from 4 suits of 13 ranks each.
Both participants receive two cards.
	The dealer hides one of his cards (places it face-down) so that the player can't see what it is.
	The player can see both of her cards.
The player takes the first turn, and can hit or stay.
	If the player hits, she gets another card, and again has the opportunity to hit (get another card) or stay.
	If the player goes over 21 points, she busts.
	If the player stays, the dealer plays next.
If the player didn't bust, it's now the dealer's turn.
	The dealer reveals his face-down card.
	If the dealer's total points are less than 17, he must hit and receive another card.
	If the dealer goes over 21 points, he busts.
	If the dealer has 17 points or more, he must stay.
Results of the game are determined.

-------------------Additional Requirement.----------------------

Welcome the player to the game, and say good bye when they quit.

Each time the player has an opportunity to hit or stay:
	Display the computer's hand; one card should remain hidden.
	Display the player's hand and her point total.
For the dealer's turn:
	The dealer doesn't play at all if the player busts.
	Display the dealer's hand, including the hidden card, and report his point total.
	Redisplay the dealer's hand and point total and each time he hits.
	Display the results when the dealer stays.
After each game is over, ask the player if they want to play again. Start a new game if they say yes, else end the game.
When the program starts, give the player 5 dollars with which to bet. Deduct 1 dollar each time she loses, and add 1 dollar each time she wins. The program should quit when she is broke (0 dollars) or rich (has a total of 10 dollars).
Be prepared to run out of cards. You can either create a new deck for each game, or keep track of how many cards remain and create a new deck as needed.

-------------------structure----------------------
Game (n)
	start (v)
Deck (n)
	deal (v) (should this be here, or in Dealer?)
Card (n)
Participant (n)
Player (n)
	hit (v)
	stay (v)
	bust (state)
	Score (n, state)
Dealer (n)
	hit (v)
	stay (v)
	deal (v) (should this be here, or in Deck?)
	bust (state)
	Score (n, state)
*/

const shuffle = require("shuffle-array");
const readline = require("readline-sync");

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
  toString() {
    return `${this.value} of ${this.suit}`;
  }
}

class Deck {
  static VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
  static NUMBERS = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  static FACE = ["Jack", "Queen", "King"];
  static ACE = "Ace";
  static VALUES = Deck.NUMBERS.concat(Deck.NUMBERS).concat([Deck.ACE]);
  static SUIT = ["Clubs", "Hearts", "Diamonds", "Spades"];
  constructor() {
    this.deck = shuffle(this.creatDeck());
  }
  creatDeck() {
    let deck = [];
    Deck.VALUES.forEach((value) => {
      Deck.SUIT.forEach((suit) => {
        deck.push(new Card(value, suit));
      });
    });
    return deck;
  }

  deal() {
    return this.deck.pop();
  }
}

class Participant {
  constructor(name) {
    //STUB
    this.score = 0;
    this.cards = [];
    this.name = name;
    this.hit = false;
  }
  showHand() {
    if (this.cards.length === 0) {
      console.log(`${this.name} has no card.\n`);
    } else if (this.cards.length === 1) {
      console.log(`${this.name} has ${this.cards[0].toString()}.\n`);
    } else {
      let cardsStr = this.cards.map((card) => card.toString());
      let cardsJoin =
        cardsStr.slice(0, cardsStr.length - 1).join(" ,") +
        " and " +
        cardsStr[cardsStr.length - 1];
      console.log(`${this.name} have ${cardsJoin}.\n`);
    }
  }

  showScore() {
    console.log(`${this.name} total score is ${this.calcScore()}.`);
  }

  calcScore() {
    let countA = 0;
    let score = 0;
    this.cards.forEach((card) => {
      if (card.value === Deck.ACE) {
        countA++;
        score += 11;
      } else if (Deck.FACE.includes(card.value)) {
        score += 10;
      } else {
        score += card.value;
      }
    });
    while (countA > 0 && score > 21) {
      score -= 10;
      countA -= 1;
    }
    return score;
  }

  isBusted() {
    if (this.calcScore(this.cards) > 21) {
      return true;
    } else return false;
  }
  showBusted() {
    console.log(`${this.name} is busted\n`);
  }
  showDecision() {
    let decision = this.hit ? "hit" : "stay";
    console.log(`${this.name} chose to ${decision}\n`);
  }

  showLastCard() {
    let lastCard = this.cards[this.cards.length - 1].toString();
    console.log(`${this.name} just got ${lastCard}`);
  }
}

class Player extends Participant {
  constructor() {
    // Score? Hand? Amount of money available?
    super("Player");
  }
  makeHitDecision() {
    let answer;
    while (true) {
      answer = readline
        .question("Do you want to hit or stay (h/s)? ")
        .toLowerCase();

      if (["h", "s"].includes(answer)) break;

      console.log(
        "Sorry, that's not a valid choice. Please input only 'h' (hit) or 's' (stay)"
      );
      console.log("");
    }
    if (answer === "h") {
      this.hit = true;
    } else this.hit = false;
  }
}

class Dealer extends Participant {
  // Very similar to a Player; do we need this?

  constructor() {
    super("Dealer");
  }

  makeHitDecision() {
    if (this.calcScore() < 17) {
      this.hit = true;
    } else this.hit = false;
  }
}

class TwentyOneGame {
  static MAXSCORE = 21;
  constructor() {
    //STUB
    // What sort of state does the game need?
    // A deck? Two participants?
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
    this.winner;
  }

  start() {
    this.displayWelcomeMessage();
    while (true) {
      this.oneRound();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  }
  playAgain() {
    let answer;
    while (true) {
      answer = readline
        .question("Do you want to play again (y/n)? ")
        .toLowerCase();

      if (["y", "n"].includes(answer)) break;

      console.log(
        "Sorry, that's not a valid choice. Please input only 'y' or 'n'"
      );
      console.log("");
    }
    if (answer === "y") {
      return true;
    } else return false;
  }
  oneRound() {
    this.dealCards();
    this.showCards();
    this.playerTurn();
    if (!this.winner) {
      this.dealerTurn();
    }
    this.displayResult();
  }

  dealCards() {
    this.dealCard(this.player);
    this.dealCard(this.dealer);
    this.dealCard(this.player);
    this.dealCard(this.dealer);
  }

  dealCard(target) {
    target.cards.push(this.deck.deal());
  }

  showCards() {
    this.showPlayerCards();
    this.showDealerCards();
    console.log("");
  }
  showPlayerCards() {
    console.log(
      `${
        this.player.name
      } got ${this.player.cards[0].toString()} and ${this.player.cards[1].toString()}.`
    );
  }
  showDealerCards() {
    console.log(
      `${
        this.dealer.name
      } got ${this.dealer.cards[0].toString()} and a hidden card.\n`
    );
  }
  participantTurn(principle) {
    if (principle.name === this.dealer.name) {
      this.dealer.showHand();
    }

    while (true) {
      principle.makeHitDecision();
      principle.showDecision();
      if (!principle.hit) break;
      this.dealCard(principle);
      principle.showLastCard();
      principle.showHand();
      principle.showScore();
      if (principle.isBusted()) {
        this.winner = principle.name;
        principle.showBusted();
        break;
      }
      if (principle.name === this.player.name) {
        this.showDealerCards();
      }
    }
  }
  playerTurn() {
    this.participantTurn(this.player);
  }

  dealerTurn() {
    this.participantTurn(this.dealer);
  }

  displayWelcomeMessage() {
    //STUB
    console.log("Welcome to twenty one game!\n");
  }

  displayGoodbyeMessage() {
    //STUB
    console.log("Thanks for playing, have a good day!");
  }

  displayResult() {
    if (!this.winner) {
      this.player.showScore();
      this.dealer.showScore();
      console.log("");
      let playerScore = this.player.calcScore();
      let dealerScore = this.dealer.calcScore();
      if (playerScore > dealerScore) {
        this.winner = this.player.name;
      } else if (playerScore < dealerScore) {
        this.winner = this.dealer.name;
      }
    }
    if (!this.winner) {
      console.log("This game is a tie!\n");
    } else {
      console.log(`${this.winner} is the winner\n`);
    }
  }
}

let game = new TwentyOneGame();
game.start();
