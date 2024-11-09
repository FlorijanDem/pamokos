function countValue(array, valueToCount) {
  let x = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valueToCount) {
      x++;
    }
  }
  return x;
}

console.log(countValue([1, 2, 3, 4, 5], 2));
console.log(countValue([1, 2, 3, 4, 5], 17));
console.log(countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));
console.log(countValue([10, 10, 10, -10], 10));
console.log(countValue(["hello", "bananas", "hello"], "hello"));
console.log(countValue(["hello", "bananas", "hello"], "giraffe"));
