/*
Write a JavaScript function to remove non-printable ASCII chars. 
Test Data :
console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
"PHP-MySQL"
*/

function remove_non_ascii(text) {
  const result = text.replace(/[^\x20-\x7E]/g, "");
  return result;
}

console.log(remove_non_ascii("äÄçÇéÉêPHP-MySQLöÖÐþúÚ"));
