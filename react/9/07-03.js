/*
Write a JavaScript function to split a string and convert it into an array of words. 
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
Click me to see the solution
*/

function string_to_array(array) {
  const result = array.split(" ");
  return result;
}

console.log(string_to_array("Robin Singh"));
