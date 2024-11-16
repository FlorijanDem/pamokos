/*
Write a JavaScript function to get the quarter (1 to 4) of the year. 

Test Data :
console.log(quarter_of_the_year(new Date(2015, 1, 21))); 
2
console.log(quarter_of_the_year(new Date(2015, 10, 18)));
4
*/
// February is a first quater
// https://en.wikipedia.org/wiki/Calendar_year

function quarter_of_the_year(date) {
  const month = date.getMonth();
  if (month < 3) {
    return 1;
  } else if (month < 6) {
    return 2;
  } else if (month < 9) {
    return 3;
  } else {
    return 4;
  }
}

console.log(quarter_of_the_year(new Date(2015, 1, 21)));
console.log(quarter_of_the_year(new Date(2015, 10, 18)));
