function positives(array) {
  const forDeletion = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 1) {
      forDeletion.push(array[i]);
    }
  }
  array = array.filter((item) => !forDeletion.includes(item));
  return array;
}
console.log(positives([1, -3, 5, -3, 0]));
console.log(positives([1, 2, 3, 9]));
console.log(positives([-1, -2, -3]));
