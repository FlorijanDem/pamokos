function sumEvenNumbers(value) {
  let sum = 0;
  for (let i = 1; i < value; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumEvenNumbers(20));
