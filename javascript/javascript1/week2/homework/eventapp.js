const d = new Date();
const day = d.getDay();

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday",
];
function getEventWeekday(event) {
  let indexOfWeekdays = (event + day) % weekdays.length;
  console.log("the day is " + weekdays[indexOfWeekdays]);
}
getEventWeekday(9);
getEventWeekday(1);
