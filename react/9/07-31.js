/*
Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML. 
Test Data :
console.log(escape_html('PHP & MySQL'));
"PHP &amp; MySQL"
console.log(escape_html('3 > 2'));
"3 &gt; 2"
*/

function escape_html(text) {
  const result = text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
  return result;
}
console.log(escape_html("PHP & MySQL"));
console.log(escape_html("3 > 2"));
