/*
 Write a JavaScript function check if a string ends with specified suffix. 
Test Data :
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
true
console.log(string_endsWith('JS PHP PYTHON',''));
false
*/

function string_endsWith(text, value) {
  const arrayOfString = text.match(/\b\w+\b/g);
  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i] == value) {
      return true;
    }
  }
  return false;
}

console.log(string_endsWith("JS PHP PYTHON", "PYTHON"));
console.log(string_endsWith("JS PHP PYTHON", ""));
