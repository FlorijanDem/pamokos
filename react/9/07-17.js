/*
Write a JavaScript function to chop a string into chunks of a given length. 
Test Data :
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]
*/

function string_chop(text, limit = text.length) {
  const result = [];
  for (let i = 0; i < text.length; i += limit) {
    result.push(text.slice(i, i + limit));
  }
  return result;
}

console.log(string_chop("w3resource"));
console.log(string_chop("w3resource", 2));
console.log(string_chop("w3resource", 3));
