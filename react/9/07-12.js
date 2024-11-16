/*
Write a JavaScript function to uncamelize a string. 
Test Data :
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
"hello world"
"hello-world"
"hello_world"
*/

function uncamelize(text, toAdd) {
  if (toAdd === undefined) {
    toAdd = " ";
  }
  return text
    .replace(/([a-z\d])([A-Z])/g, "$1" + toAdd + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + toAdd + "$2")
    .toLowerCase();
}

console.log(uncamelize("helloWorld"));
console.log(uncamelize("helloWorld", "-"));
console.log(uncamelize("helloWorld", "_"));
