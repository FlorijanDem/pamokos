/*
Write a JavaScript function to find a word within a string. 
Test Data :
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output :
"'fox' was found 1 times."
"'aa' was found 2 times."
*/

function search_word(text, value) {
  let counter = 0;
  const arrayOfString = text.match(/\b\w+\b/g);
  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i] == value) {
      counter++;
    }
  }
  return `${value} was found ${counter} times`;
}

console.log(search_word("The quick brown fox", "fox"));
console.log(search_word("aa, bb, cc, dd, aa", "aa"));
