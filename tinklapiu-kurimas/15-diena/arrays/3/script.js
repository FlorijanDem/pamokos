const numbers = [1, 5, 10, 9, 4, 1];

function largestElement(arr) {
  return arr.reduce(
    (largest, current) => (current > largest ? current : largest),
    arr[0]
  );
}
console.log(largestElement(numbers));

// function max(numbers) {
//   x = Math.max(...numbers);
//   return x;
// }
// console.log(max);

// let largest = numbers[0];
// function max(numbers) {
//   for (let i = 0; i <= numbers.length; i++) {
//     if (numbers[i] > largest) {
//       largest = numbers[i];
//       return largest;
//     }
// }
// }
// console.log(max(numbers));

// function getMaxOfArray(numbers) {
//     return Math.max.apply(null, numbers);
//   }
// console.log(getMaxOfArray)
