/*
Write a JavaScript function to convert a string to title case. 
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."
*/

function sentenceCase(text) {
  var splitStr = text.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

console.log(sentenceCase("PHP exercises. python exercises."));
