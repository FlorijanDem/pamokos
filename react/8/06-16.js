/*
Write a JavaScript function to count the number of days passed since beginning of the year.

Test Data :
console.log(days_passed(new Date(2015, 0, 15))); 
15
console.log(days_passed(new Date(2015, 11, 14)));
348
*/

function days_passed(date) {
  let sumOfDays = 0;
  const month = date.getMonth();
  const year = date.getFullYear();
  const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const daysInMonths = [
    31,
    isLeapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  for (let i = 0; i < month; i++) {
    const inMonth = daysInMonths[i];
    sumOfDays = sumOfDays + inMonth;
  }
  const daysAdditional = new Date(date).getDate();
  sumOfDays = sumOfDays + daysAdditional;
  return sumOfDays;
}

console.log(days_passed(new Date(2015, 0, 15)));
console.log(days_passed(new Date(2015, 11, 14)));
