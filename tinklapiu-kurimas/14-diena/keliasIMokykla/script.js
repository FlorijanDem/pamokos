const clapHands = 10;
const snapFingers = 5;
const stepToSchool = parseInt(prompt("Įveskite žingsnių kiekį iki mokyklos"));
let fiveNumbers = 0;
let tenNumbers = 0;

for (let i = 1; i <= stepToSchool; i++) {
  if (i % 10 === 0) {
    tenNumbers++;
  }
  if (i % 5 === 0 && i % 10 === 5) {
    fiveNumbers++;
  }
}
console.log(`Suplojimų bus: ${tenNumbers}`);
console.log(`Spragtelėjimų bus: ${fiveNumbers}`);
