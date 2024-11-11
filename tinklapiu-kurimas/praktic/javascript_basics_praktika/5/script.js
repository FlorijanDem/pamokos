// const amount = document.getElementById("amount");
// const rate = document.getElementById("rate");
// const years = document.getElementById("year")

function interestCalculator (amount, rate, years) {
    getMoney = amount / 100 * rate * years;
    return getMoney; 
}
console.log(interestCalculator(10000, 8.5, 3))

// document.getElementById("result").innerText = interestCalculator(10000, 8.5, 3)