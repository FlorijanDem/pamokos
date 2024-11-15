/*
Write a JavaScript function to capitalize the first letter of a string. 
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
*/

function capitalize(text) {
  result = `${text[0].toUpperCase()}${text.slice(1)}`;
  return result;
}

console.log(capitalize("js string exercises"));
