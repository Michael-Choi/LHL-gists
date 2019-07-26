//* Turns yyyy/mm/dd into December 2nd, 2017 format

let talkingCalendar = function(date) {
  // Your code here
  let varDate = new Date(date);
  let dateNum = varDate.getDate();
  let suffix = "";
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  if (dateNum == 1) {
    suffix = "st";
  } else if (dateNum == 2) {
    suffix = "nd";
  } else if (dateNum == 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  let result =
    months[varDate.getMonth()] +
    " " +
    varDate.getDate() +
    suffix +
    ", " +
    varDate.getFullYear();
  return result;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
