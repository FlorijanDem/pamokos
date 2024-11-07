const signupForm = document.querySelector("#signup-form");
const list = [];
signupForm.addEventListener("submit", (event) => {
    const task = document.querySelector("#task");
    const valueOfData = task.value;
    console.log(task.value)
    event.preventDefault();
    list.push(valueOfData);
    document.getElementById("list").innerHTML = list;
    console.log(list)
})