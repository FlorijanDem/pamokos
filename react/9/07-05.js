/*
 Write a JavaScript function to convert a string in abbreviated form. 
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/

function abbrev_name(text) {
  const result = text.replace("Singh", "S.");
  return result;
}

console.log(abbrev_name("Robin Singh"));
