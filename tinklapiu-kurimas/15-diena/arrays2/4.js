function mean (array) {
    let x = 0;
    for (let i = 0; i < array.length; i++) {
        x += array[i];
        // console.log(x)
    }
    x = x / array.length;
    return x;
}
console.log(mean([30, 10, 20]))
console.log(mean([-10, 10]))