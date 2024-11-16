/*
Write a JavaScript function to count the occurrence of a substring in a string. 
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output :
1
*/

// Just experement: Coding without documentation and googling
function count(text, value, encludeCapitals) {
  let counter = 0;
  let stringWithCapitalLetter = false;
  const arrayOfString = text.match(/\b\w+\b/g);
  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i] == value || arrayOfString[i].toUpperCase() == value) {
      counter++;
    }
    appendLetersOfWords = [...arrayOfString];
    for (let xi = 0; xi < appendLetersOfWords.length; xi++) {
      if (appendLetersOfWords[xi] == value) {
        stringWithCapitalLetter = true;
      }
    }
  }
  if (encludeCapitals !== false) {
    counter++;
  }
  const result = counter;
  if (encludeCapitals === false) {
    return result;
  }
  return result;
}

console.log(count("The quick brown fox jumps over the lazy dog", "the"));
console.log(count("The quick brown fox jumps over the lazy dog", "fox", false));
