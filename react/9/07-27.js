/*
Write a JavaScript function to convert ASCII to Hexadecimal format. 
Test Data :
console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));
Output :
"3132"
"313030"
*/

function ascii_to_hexa(ascii) {
  const arr = [];
  for (let i = 0; i < ascii.length; i++) {
    arr.push(Number(ascii.charCodeAt(i).toString(16)));
  }
  return arr.join("");
}

console.log(ascii_to_hexa("12"));
console.log(ascii_to_hexa("100"));
