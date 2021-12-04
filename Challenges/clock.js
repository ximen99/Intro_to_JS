class Clock {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }
  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }
  static convertTime(hours = 0, minutes = 0) {
    let minInADay = 24 * 60;
    let totalMinutes = hours * 60 + minutes;
    totalMinutes = totalMinutes % minInADay;
    totalMinutes = totalMinutes >= 0 ? totalMinutes : 24 * 60 + totalMinutes;
    return [Math.floor(totalMinutes / 60), totalMinutes % 60];
  }
  toString() {
    return `${("00" + this.hours).slice(-2)}:${("00" + this.minutes).slice(
      -2
    )}`;
  }
  add(minToAdd) {
    [this.hours, this.minutes] = Clock.convertTime(
      this.hours,
      this.minutes + minToAdd
    );
    return this;
  }
  subtract(minToSubtract) {
    [this.hours, this.minutes] = Clock.convertTime(
      this.hours,
      this.minutes - minToSubtract
    );
    return this;
  }
  isEqual(clock) {
    if (this.hours === clock.hours && this.minutes === clock.minutes) {
      return true;
    } else return false;
  }
}

module.exports = Clock;
