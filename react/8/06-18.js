/*
Write a JavaScript program to calculate age. 

Test Data :
console.log(calculate_age(new Date(1982, 11, 4))); 
32
console.log(calculate_age(new Date(1962, 1, 1)));
53
*/

function calculate_age(date) {
  const today = new Date();
  const birthDate = new Date(date);
  const age = today.getFullYear() - birthDate.getFullYear();
  return age;
}
// Answers in "Test Data :" outdated
console.log(calculate_age(new Date(1982, 11, 22)));
console.log(calculate_age(new Date(1962, 1, 1)));
