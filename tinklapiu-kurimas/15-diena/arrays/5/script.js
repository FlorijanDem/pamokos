function allPositive(array) {
    return array.every(num => num > 0);
}
console.log(allPositive([1, 2, 3, 4, 5]));
console.log(allPositive([1, 2, -3, 4, 5]));
console.log(allPositive([0, 0, 1]))



// function allPositive (array) {
//     array.reduce (
        
//     )
//     x = array.lenght;
//     console.log(x)
//     for (let i = 0; i < x; i++) {
//         if (array[i] < 1) {
//             console.log(array[i])
//         }
//         else {
//             return false;
//             console.log("not")
//         }
//     }
//     // return rezult;
// }