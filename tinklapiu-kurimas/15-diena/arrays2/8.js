function countEvens(array) {
  x = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      x++;
    }
  }
  return x;
}

console.log(countEvens([1, 2, 3, 4, 5]));
console.log(countEvens([10, 10, 10]));
console.log(countEvens([1, 1, 1, 2]));
