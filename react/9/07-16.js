/*
 Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters. 
Test Data :
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
"We are doing JS string exercises."
"We are doing JS ..."
"We are doing !!"
*/

function text_truncate(text, long, toAdd) {
  arr = [...text];
  if (long === undefined) {
    long = text.length;
  }
  if (toAdd === undefined) {
    toAdd = "...";
  }
  const result = arr.slice(0, long).join("");

  return text.length > long ? result + toAdd : result;
}

console.log(text_truncate("We are doing JS string exercises."));
console.log(text_truncate("We are doing JS string exercises.", 16));
console.log(text_truncate("We are doing JS string exercises.", 12, "!!"));
