const initialValue = 0;
function sumNumbers(array) {
    sumNumbers = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initialValue
    )
    return sumNumbers;
}


console.log(sumNumbers([1, 4, 8]));