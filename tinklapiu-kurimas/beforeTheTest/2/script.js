function randomWords(numberOfWords) {
    array = ["JavaScript", "kodas", "kompiuteris", "programa", "duomenys"]
    for (let i = 0; i < numberOfWords; i++) {
        console.log(array[Math.floor(Math.random() * array.length)]);
    }
}
randomWords(3)