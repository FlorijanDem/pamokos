/*
Write a JavaScript function to capitalize the first letter of each word in a string. 
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
*/

function capitalize_Words(text) {
  // Put every word in diferent value in array
  const words = text.split(" ");

  // Take every word and make first letter upper case
  // In the end collect in one string using "join"
  const result = words
    .map((word) => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(" ");

  return result;
}

console.log(capitalize_Words("js string exercises"));
