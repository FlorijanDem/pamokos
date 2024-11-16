/*
Write a JavaScript function to get the amount of days of a year. 

Test Data :
console.log(days_of_a_year(2015)); 
365
console.log(days_of_a_year(2016));
366
*/

function days_of_a_year(year) {
  const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  if (isLeapYear === true) {
    return 366;
  } else {
    return 365;
  }
}

console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));
