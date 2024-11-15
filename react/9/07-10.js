/*
Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
*/

// If x = uppercase change it to lower and the same
function swapcase(text) {
  const array = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i].toUpperCase() === text[i]) {
      array.push(text[i].toLowerCase());
    } else {
      array.push(text[i].toUpperCase());
    }
  }

  return array.join("");
}

console.log(swapcase("AaBbc"));

// https://www.geeksforgeeks.org/how-to-check-case-of-letter-in-javascript/
