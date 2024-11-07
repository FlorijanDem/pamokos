function product(array) {
    const initialValue = 1;
    const result = array.reduce(
        (accumulator, currentValue) => accumulator * currentValue,
    initialValue
    )
    return result;
}
console.log(product([2, 4, 6]));
console.log(product([-10, 10]));