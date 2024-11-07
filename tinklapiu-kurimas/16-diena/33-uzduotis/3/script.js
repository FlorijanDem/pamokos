const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  x = parseInt(signupForm.elements["firstNumber"].value);
  y = parseInt(signupForm.elements["secondNumber"].value);
  z = x + y;
  document.getElementById("sum").innerHTML = z;
});
