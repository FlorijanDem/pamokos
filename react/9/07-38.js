/*
Write a JavaScript function to create a case-insensitive search. 
Test Data :
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
"Not Matched"
*/

function case_insensitive_search(text, value) {
  const result = text.search(new RegExp(value, "i"));

  if (result > 0) {
    return "Matched";
  } else {
    return "Not Matched";
  }
}
console.log(case_insensitive_search("JavaScript Exercises", "exercises"));
console.log(case_insensitive_search("JavaScript Exercises", "Exercises"));
console.log(case_insensitive_search("JavaScript Exercises", "Exercisess"));
