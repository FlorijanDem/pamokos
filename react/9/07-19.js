/*
Write a JavaScript function to escape a HTML string. 
Test Data :
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
Output :
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
*/

function escape_HTML(text) {
  const result = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  return result;
}

console.log(
  escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">')
);
