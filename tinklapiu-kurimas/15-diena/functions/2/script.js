function compareBMI(weight, height, weightJohn, heightJohn) {
  bmi = weight / height ** 2;
  bmiJohn = weightJohn / heightJohn ** 2;
  rezult = bmi > bmiJohn;
  return rezult;
}
console.log(compareBMI(70, 1.85, 68, 1.87));
