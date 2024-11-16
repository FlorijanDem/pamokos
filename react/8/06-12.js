/*
Write a JavaScript function to get the minimum date from an array of dates. 

Test Data :
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/01/03"
*/

function min_date (array) {
  const dateOne = new Date(array[0]).getTime();
  const dateTwo = new Date (array[1]).getTime();
  const dateThree = new Date (array[2]).getTime();
  if (dateOne < dateTwo && dateOne < dateThree) {
    return array[0];
  } else if (dateTwo < dateOne && dateTwo < dateThree) {
    return array[1];
  } else {
    return array[2];
  }
}

console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
