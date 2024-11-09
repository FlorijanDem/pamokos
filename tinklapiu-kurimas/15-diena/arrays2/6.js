function odds(array) {
  const forDeletion = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      forDeletion.push(array[i]);
    }
  }
  array = array.filter((item) => !forDeletion.includes(item));
  return array;
}

console.log(odds([1, 2, 4, 3, 8]));
