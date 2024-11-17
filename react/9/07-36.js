/*
Write a JavaScript function to create a Zerofilled value with optional +, - sign. 
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"
*/
// Not fully understand what write down, just copy code
// https://www.w3resource.com/javascript-exercises/javascript-string-exercise-36.php
function zeroFill(number, width, osign) {
  const num = "" + Math.abs(number),
    // Calculate the number of zeros to be added to the left based on the specified width
    zerosw = width - num.length,
    // Determine if the number is positive
    sign = number >= 0;
  // Construct and return the zero-filled string
  return (
    (sign ? (osign ? "+" : "") : "-") +
    // Append zeros to the left of the number using exponential notation and substring
    Math.pow(10, Math.max(0, zerosw)).toString().substr(1) +
    num
  );
}

console.log(zeroFill(120, 5, "-"));
console.log(zeroFill(29, 4));
