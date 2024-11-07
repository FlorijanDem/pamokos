const signupForm = document.querySelector("#signup-form");
const list = [];
let i = 0;
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = document.querySelector("#task");
  const valueOfData = task.value;
  list.push(valueOfData);
  document.getElementById(`list${i}`).innerHTML = list[i];
  i++;
});
