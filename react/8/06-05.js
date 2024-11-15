/*
Write a JavaScript function to compare dates (i.e. greater than, less than or equal to). 

Test Data :
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
Output :
"Date1 = Date2" 
"Date1 > Date2" 
"Date2 > Date1"
*/

function compare_dates(firstDate, secondDate) {
  const firstYear = firstDate.getFullYear();
  const firstMonth = firstDate.getMonth();
  const firstDay = firstDate.getDate();
  const firstHours = firstDate.getHours();
  const firstMinutes = firstDate.getMinutes();
  const secondYear = secondDate.getFullYear();
  const secondMonth = secondDate.getMonth();
  const secondDay = secondDate.getDate();
  const secondHours = secondDate.getHours();
  const secondMinutes = secondDate.getMinutes();
  let result;
  switch (true) {
    case firstYear === secondYear &&
      firstMonth === secondMonth &&
      firstDay === secondDay &&
      firstHours === secondHours &&
      firstMinutes === secondMinutes:
      result = "Date1 = Date2";
      break;
    case firstYear < secondYear ||
      (firstYear === secondYear && firstMonth < secondMonth) ||
      (firstYear === secondYear &&
        firstMonth === secondMonth &&
        firstDay < secondDay) ||
      (firstYear === secondYear &&
        firstMonth === secondMonth &&
        firstDay === secondDay &&
        firstHours < secondHours) ||
      (firstYear === secondYear &&
        firstMonth === secondMonth &&
        firstDay === secondDay &&
        firstHours === secondHours &&
        firstMinutes < secondMinutes):
      result = "Date2 > Date1";
      break;
    default:
      result = "Date1 > Date2";
  }
  return result;
}

console.log(
  compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:00"))
);
console.log(
  compare_dates(new Date("11/14/2013 00:01"), new Date("11/14/2013 00:00"))
);
console.log(
  compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:01"))
);
