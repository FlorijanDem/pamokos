function anyPositive(array) {
    const initialValue = 1
;
    const result = array.reduce(
        (accumulator, currentValue) => accumulator * currentValue,
    initialValue
    )
    if (result> 0) {
        return true;
    }
    else if (result <=0) {
        return false;
    }
}
console.log(anyPositive([1, 2, 3, 4, 5]));
console.log(anyPositive([1, 2, -3, 4, 5]));
console.log(anyPositive([0, 0, 1]));
console.log(anyPositive([-10, -10, -10]));
console.log(anyPositive([-10, -10, 1]));