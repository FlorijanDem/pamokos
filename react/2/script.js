function calculate(num1, num2, sign) {
  let sum = 0;
  try {
    if (sign === "+") {
      sum = num1 + num2;
      return sum;
    } else if (sign === "/" && num1 !== 0 && num2 !== 0) {
      sum = num1 / num2;
      return sum;
    } else if (sign === "/" && (num1 === 0 || num2 === 0)) {
      throw new Error("Cannot divide by zero");
    } else if (sign === "-") {
      sum = num1 - num2;
      return sum;
    } else if (sign === "*") {
      sum = num1 * num2;
      return sum;
    } else {
      throw new Error("Invalid operation");
    }
  } catch (error) {
    console.error(error);
  }
}

console.log(calculate(10, 2, "+")); // Should output 12
console.log(calculate(10, 2, "/")); // Should output 5
console.log(calculate(10, 0, "/")); // Should throw "Cannot divide by zero" error
console.log(calculate(10, 2, "&")); // Should throw "Invalid operation" error
console.log(calculate(10, 2, "-"));
console.log(calculate(10, 2, "*"));
