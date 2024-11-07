const signupForm = document.querySelector("#signup-form");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let guesses = 0;

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  x = parseInt(signupForm.elements["number"].value);
  y = getRandomInt(100);
  guesses++;
  if (x === y) {
    document.getElementById("resultText").innerHTML = "You are won!";
  } else if (x < y) {
    document.getElementById("resultText").innerHTML =
      "The guessed number is bigger!";
    document.getElementById("resultCount").innerHTML = guesses + " guesses was done";
  } else if (x > y) {
    document.getElementById("resultText").innerHTML =
      "The guessed number is smaller!";
    document.getElementById("resultCount").innerHTML = guesses + " guesses was done";
  }
});
