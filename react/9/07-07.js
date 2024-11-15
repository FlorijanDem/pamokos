/*
Write a JavaScript function to parameterize a string. 
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
*/

function string_parameterize(text) {
  const withoutSpaces = text.replaceAll(" ", "-");
  const withoutDot = withoutSpaces.split(".") [0];
  const result = withoutDot.toLowerCase();
  return result;
}

console.log(string_parameterize("Robin Singh from USA."));
