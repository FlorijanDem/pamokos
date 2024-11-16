/*
Write a JavaScript function to truncate a string to a certain number of words. 
Test Data :
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
Output :
"The quick brown fox"
*/

function truncate(text, value) {
  const arr = [];
  const arrayOfString = text.match(/\b\w+\b/g);
  for (let i = 0; i < arrayOfString.length; i++) {
    if (i == value) {
      return arr.join(" ");
    }
    arr.push(arrayOfString[i]);
  }
  return false;
}

console.log(truncate("The quick brown fox jumps over the lazy dog", 4));
