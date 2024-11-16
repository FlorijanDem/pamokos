/*
Write a JavaScript function to chop a string into chunks of a given length. 
Test Data :
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]
*/

//Undone
function string_chop(text, value) {
    if (value === undefined || value === 0 || typeof(value) != "number") {
        return text;
    }
    const arr = [];
    for (let i = 0; i < text.length; i++) {
        let x = [];
        console.log(x)
        for (let xi = 0; xi < value; xi++) {
            x.push(text[i]);
            i++
        }
    }
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));