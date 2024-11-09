function integers (array) {
    const integers = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] === parseInt(array[i])) {
            integers.push(parseInt(array[i]))
        }
    }
    return integers;
}
console.log(integers([3.14, 2.4, 7, 8.1, 2]))