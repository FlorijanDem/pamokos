/*
Write a JavaScript function to remove non-word characters. 
Test Data :
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
"PHP - MySQL"
*/

function remove_non_word(text) {
  const pattern = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;
  const result = text.replace(pattern, "");
  return result;
}

console.log(remove_non_word("PHP ~!@#$%^&*()+`-={}[]|\\:\";'/?><., MySQL"));
