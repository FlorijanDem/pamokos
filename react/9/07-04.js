/*
Write a JavaScript function to remove specified number of characters from a string. 
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
*/

function truncate_string(text, value) {
  const result = text.slice(0, value);
  return result;
}

console.log(truncate_string("Robin Singh", 4));
