/*
Write a JavaScript function to convert Hexadecimal to ASCII format. 
Test Data :
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));
Output :
"12"
"100"
*/

function hex_to_ascii(value) {
  const hex = value.toString();
  let result = "";
  for (let i = 0; i < hex.length; i += 2) {
    result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return result;
}

console.log(hex_to_ascii("3132"));
console.log(hex_to_ascii("313030"));
