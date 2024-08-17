enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(day: Day): boolean {
  return day === Day.Saturday || day === Day.Sunday;
}

console.log(isWeekend(Day.Monday));
console.log(isWeekend(Day.Sunday));
