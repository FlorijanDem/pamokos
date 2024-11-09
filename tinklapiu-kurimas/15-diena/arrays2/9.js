function countLessThan(array, lessThan) {
  let x = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < lessThan) {
      x++;
    }
  }
  return x;
}

console.log(countLessThan([1, 2, 3, 4, 5], 2));
console.log(countLessThan([1, 2, 3, 4, 5], 17));
console.log(countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));
console.log(countLessThan([10, 10, 10, -10, 15, 7], 10));
