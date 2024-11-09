const findInHaystack = (array, valueToSearch) => {
  let x = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valueToSearch) {
      x = true;
    }
  }
  return x;
};

console.log(findInHaystack([1, 2, 30, -10], 480));
console.log(findInHaystack([1, 2, 30, -10], 30));
console.log(findInHaystack(["waffle", "giraffe", "banana"], "giraffe"));
console.log(findInHaystack(["waffle", "giraffe", "banana"], "lemons"));
