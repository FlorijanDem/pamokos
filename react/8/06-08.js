/*
Write a JavaScript function to get difference between two dates in days. 

Test Data :
console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216 
-28
*/

function date_diff_indays(firstDate, secondDate) {
  const dateOne = new Date(firstDate).getTime();
  const dateTwo = new Date(secondDate).getTime();
  const differenceInTime = dateTwo - dateOne;
  const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
  return differenceInDays;
}

console.log(date_diff_indays("04/02/2014", "11/04/2014"));
console.log(date_diff_indays("12/02/2014", "11/04/2014"));
