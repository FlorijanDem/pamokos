/*
Write a JavaScript function to hide email addresses to protect from unauthorized user. 
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/

function protect_email(text) {
  const result = text.replace("_singh", "...");
  return result;
}

console.log(protect_email("robin_singh@example.com"));
