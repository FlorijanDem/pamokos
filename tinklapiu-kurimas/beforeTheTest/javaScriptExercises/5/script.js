const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (event) => {
    event.preventDefault();    
    let heigthToCalculate = document.getElementById("heigth").value;
    let weigthToCalculate = document.getElementById("weigth").value;

    if (isNaN(heigthToCalculate) || isNaN(weigthToCalculate) || heigthToCalculate <= 0 || weigthToCalculate <= 0) {
        alert("Please enter valid height and weight.");
        return;
    }


    const BMI = weigthToCalculate/ (heigthToCalculate*2);
    console.log(BMI)
    document.getElementById(rezult).innerHTML = BMI;
})