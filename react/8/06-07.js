/*
Write a JavaScript function to test whether a date is a weekend. 

Note : Use standard Saturday/Sunday definition of a weekend.
Test Data :
console.log(is_weekend('Nov 15, 2014')); 
console.log(is_weekend('Nov 16, 2014')); 
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend" 
"weekend" 
undefined
*/

function is_weekend(dateOfWeek) {
  const date = new Date(dateOfWeek);
  const day = date.getDay();
  const isWeekend = day === 6 || day === 0;
  if (isWeekend === true) {
    return "weekend";
  }
}

console.log(is_weekend("Nov 15, 2014"));
console.log(is_weekend("Nov 16, 2014"));
console.log(is_weekend("Nov 17, 2014"));
