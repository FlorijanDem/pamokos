function evenNumber(x, y) {
  let rezult = 0;
  for (let i = x; i <= y; i++) {
    if (i % 2 === 0) {
      rezult++;
    }
  }
  return rezult;
}

console.log(evenNumber(1, 50));