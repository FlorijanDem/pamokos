/*
Write a JavaScript function to remove the first occurrence of a given 'search string' from a string. 
Test Data :
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
Output :
"The quick brown fox jumps over lazy dog"
*/

function remove_first_occurrence(string1, string2) {
  const text = string1.match(/\b\w+\b/g);
  const toExclude = [string2];
  let obj = Object.fromEntries(toExclude.map((e) => [e, true]));
  let res = text.filter((e) => !obj[e]);
  return res.join(" ");
}
console.log(
  remove_first_occurrence("The quick brown fox jumps over the lazy dog", "the")
);
