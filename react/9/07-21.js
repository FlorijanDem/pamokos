/*
Write a JavaScript function to repeat a string a specified times. 
Test Data :
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
Output :
"aaaa"
"Error in string or count."
*/

function repeat_string(text, value) {
  if (value === undefined) {
    return "Error in string or count.";
  }
  const arr = [];
  for (let i = 0; i < value; i++) {
    arr.push(text);
  }
  return arr.join("");
}

console.log(repeat_string("a", 4));
console.log(repeat_string("a"));
