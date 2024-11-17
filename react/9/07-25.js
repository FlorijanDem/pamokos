/*
Write a JavaScript function to alphabetize a given string. 
Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
Test Data :
console.log(alphabetize_string('United States'));
Output :
"SUadeeinsttt"
*/

function alphabetize_string(text) {
  const result = text.split("").sort().join("").trim();
  return result;
}

console.log(alphabetize_string("United States"));
