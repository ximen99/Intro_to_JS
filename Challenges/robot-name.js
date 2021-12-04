class Robot {
  constructor() {
    this.robotName = Robot.generateNonRepeatingName();
    Robot.existingNames.push(this.robotName);
  }
  static alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static numeral = "0123456789";
  static existingNames = [];
  static generateName() {
    let name = "";
    for (let i = 0; i < 5; i++) {
      if (i < 2) {
        let randomIndex = Math.floor(Math.random() * Robot.alphabet.length);
        name += Robot.alphabet[randomIndex];
      } else {
        let randomIndex = Math.floor(Math.random() * Robot.numeral.length);
        name += Robot.numeral[randomIndex];
      }
    }
    return name;
  }
  static generateNonRepeatingName() {
    let newName;
    while (!newName || Robot.existingNames.includes(newName)) {
      newName = Robot.generateName();
    }
    return newName;
  }
  name() {
    if (this.robotName) {
      return this.robotName;
    } else {
      this.robotName = Robot.generateNonRepeatingName();
      Robot.existingNames.push(this.robotName);
      return this.robotName;
    }
  }
  reset() {
    Robot.existingNames.splice(Robot.existingNames.indexOf(this.robotName), 1);
    this.robotName = undefined;
  }
}

module.exports = Robot;
