/*
Write a JavaScript function to concatenates a given string n times (default is 1). 
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!"
*/
function repeat(text, x) {
  let result = [];
  if (x > 0) {
    for (let i = 0; i < x; i++) {
      result.push(text);
    }
    return result.join("");
  } else {
    return text;
  }
}

console.log(repeat("Ha!"));
console.log(repeat("Ha!", 2));
console.log(repeat("Ha!", 3));
