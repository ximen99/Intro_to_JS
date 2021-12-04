class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }
  static weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  static schedules = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "last",
    "teenth",
  ];
  day(weekday, schedule) {
    let dayOfWeek = Meetup.weekdays.indexOf(weekday.toLowerCase());
    let nWeek = Meetup.schedules.indexOf(schedule.toLowerCase());
    if (nWeek <= 4) {
      let firstDayOfWeek = new Date(this.year, this.month - 1).getDay();
      if (dayOfWeek >= firstDayOfWeek) {
        return Meetup.validDate(
          this.year,
          this.month,
          dayOfWeek - firstDayOfWeek + 1 + nWeek * 7
        );
      } else {
        return Meetup.validDate(
          this.year,
          this.month,
          7 - firstDayOfWeek + 1 + dayOfWeek + nWeek * 7
        );
      }
    } else if (nWeek === 5) {
      let lastDay = new Date(this.year, this.month, 0);
      let daysInMonth = lastDay.getDate();
      let lastDayOfWeek = lastDay.getDay();
      if (dayOfWeek <= lastDayOfWeek) {
        return new Date(
          this.year,
          this.month - 1,
          daysInMonth - (lastDayOfWeek - dayOfWeek)
        );
      } else
        return new Date(
          this.year,
          this.month - 1,
          daysInMonth + dayOfWeek - lastDayOfWeek - 7
        );
    } else if (nWeek == 6) {
      for (let day = 13; day <= 19; day++) {
        let resultDate = new Date(this.year, this.month - 1, day);
        if (resultDate.getDay() === dayOfWeek) {
          return resultDate;
        }
      }
    }
  }
  static validDate(year, month, day) {
    if (day <= new Date(year, month, 0).getDate()) {
      return new Date(year, month - 1, day);
    } else return null;
  }
}

module.exports = Meetup;
