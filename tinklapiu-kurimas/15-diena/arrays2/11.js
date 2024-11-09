function glueArrays(array1, array2) {
  inOne = array1 + array2;
  return inOne;
}

console.log(glueArrays([1, 2, 3], [4, 5, 6]));
console.log(glueArrays([-10, undefined], [true, "waffles"]));
console.log(glueArrays([], []));
console.log(glueArrays([20, 104], []));
console.log(glueArrays([], ["hello", "world"]));
