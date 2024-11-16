/*
Write a JavaScript function to get a part of a string after a specified character.
Test Data :
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
Output :
"w3resource"
"xercises"
*/

//Undone
function subStrAfterChars (text, charterOne, type) {
    // Using spread operator you can easy append every charted of the string
    // to separete array value
    arr = [...text];
    buffer = [];
    if (type === "a") {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == charterOne) {
                return buffer.join("")
            }
            buffer.push(arr[i]);
        }
    } else if (type === "b") {
        for (let i = arr.length; i > 0; i--) {
            if (arr[i] == charterOne) {
                return buffer.join("")
            }
            buffer.push(arr[i]);
        }
    }
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));