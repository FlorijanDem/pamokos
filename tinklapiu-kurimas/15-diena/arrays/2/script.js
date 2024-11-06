const myArray = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
console.log(myArray[2]);
myArray[2] = null;
for (let i = 0; i < 7; i++) {
  if (myArray[i] == null) {
    console.log(i);
  }
}
