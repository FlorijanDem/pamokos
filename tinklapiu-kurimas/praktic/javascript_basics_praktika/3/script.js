function sumWhileNotNegativeNumber() {
  let sum = 0;
  while (true) {
    i = parseInt(prompt("Enter the number"));
    if (i < 0) {
      return sum;
    }
    sum += i;
    console.log(sum);
  }
}
alert(sumWhileNotNegativeNumber());
