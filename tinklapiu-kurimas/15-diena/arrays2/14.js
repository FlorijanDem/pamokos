const firstIndexOf = (array, valueToSearch) => {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valueToSearch) {
      index = array.indexOf(array[i]);
    }
  }
  return index;
};

console.log(firstIndexOf([10, 20, 30, 20], 20));
console.log(firstIndexOf([10, 20, 30, 20], 17));
console.log(firstIndexOf(["giraffe", "giraffe", "banana"], "giraffe"));
console.log(firstIndexOf(["giraffe", "giraffe", "banana"], "banana"));
