/*
Write a JavaScript function that can pad (left, right) a string to get to a determined length. 
Test Data :
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
Output :
"0123"
"12300000"
*/

function formatted_string(pad, numbers, direction) {
  if (typeof numbers === "undefined") {
    return pad;
  }
  if (direction == "l") {
    const result = (pad + numbers).slice(-pad.length);
    return result;
  } else {
    const result = (numbers + pad).substring(0, pad.length);
    return result;
  }
}

console.log(formatted_string("0000", 123, "l"));
console.log(formatted_string("00000000", 123, ""));
