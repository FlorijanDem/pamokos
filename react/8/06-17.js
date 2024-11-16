/*
 Write a JavaScript function to convert a Unix timestamp to time.

Test Data :
console.log(Unix_timestamp(1412743274));
"6:41:14"
*/

function Unix_timestamp(value) {
  const date = new Date(value * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formattedTime = hours + ":" + minutes + ":" + seconds;
  
  return formattedTime;
}
// Also adding you time zone 
console.log(Unix_timestamp(1412743274));
