/*
Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison. 
Test Data :
console.log(compare_strings('abcd', 'AbcD'));
true
console.log(compare_strings('ABCD', 'Abce'));
false
*/

function compare_strings(stringOne, stringTwo) {
  let valuesIsTrue = 0;
  let valuesIsFalse = 0;
  for (let i = 0; i < stringOne.length; i++) {
    if (
      stringOne[i] === stringTwo[i] ||
      stringOne[i].toUpperCase() === stringTwo[i] ||
      stringOne[i].toLowerCase() === stringTwo[i] ||
      stringTwo[i].toUpperCase() === stringOne[i] ||
      stringTwo[i].toLowerCase() === stringOne[i] ||
      stringOne[i].toUpperCase() === stringTwo[i].toUpperCase() ||
      stringOne[i].toLowerCase() === stringTwo[i].toLowerCase()
    ) {
      valuesIsTrue++;
    } else {
      valuesIsFalse++;
    }
  }
  if (valuesIsFalse === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(compare_strings("abcd", "AbcD"));
console.log(compare_strings("ABCD", "Abce"));
