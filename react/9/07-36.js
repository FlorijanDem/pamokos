/*
Write a JavaScript function to create a Zerofilled value with optional +, - sign. 
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"
*/

function zeroFill(numbers, width, osign) {
  const transformToString = Math.abs(numbers).toString();
  const zerosToAdd = Math.max(0, width - transformToString.length);
  let sign = "";
  if (numbers >= 0) {
    if (osign) {
      sign = "+";
    } else {
      sign = "";
    }
  } else {
    sign = "-";
  }
  const zerosToOutput = "0".repeat(zerosToAdd);
  const result = sign + zerosToOutput + transformToString;
  return result;
}

console.log(zeroFill(120, 5, "-"));
console.log(zeroFill(29, 4));
