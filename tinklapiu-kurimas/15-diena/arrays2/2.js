function anyPositive(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= 0) {
      return false;
    }
  }
  return true;
}
console.log(anyPositive([1, 2, 3, 4, 5]));
console.log(anyPositive([1, 2, -3, 4, 5]));
console.log(anyPositive([0, 0, 1]));
console.log(anyPositive([-10, -10, -10]));
console.log(anyPositive([-10, -10, 1]));
