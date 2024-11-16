/*
Write a JavaScript function to get the day of the month, 2 digits with leading zeros. 
Test Data :
d= new Date(2015, 10, 1); 
console.log(day_of_the_month(d));
"01"
*/

function day_of_the_month(date) {
  const days = date.getDate();
  let leesThanTen = Math.floor(days / 10);
  if (leesThanTen === 0) {
    const result = `0${days}`;
    return result;
  } else {
    return days;
  }
}

const d = new Date(2015, 10, 1);
console.log(day_of_the_month(d));
const x = new Date(2015, 10, 10);
console.log(day_of_the_month(x));
