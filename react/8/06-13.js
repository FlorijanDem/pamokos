/*
Write a JavaScript function that will return the number of minutes in hours and minutes. 

Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."
*/

function timeConvert(value) {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;

  result = `${value} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
  return result;
}

console.log(timeConvert(200));
