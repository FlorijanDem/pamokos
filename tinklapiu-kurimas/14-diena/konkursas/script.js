const start = parseInt(prompt("Įveskite intervalo pradžią:"));
const end = parseInt(prompt("Įveskite intervalo pabaigą:"));
let i = start;
let shirts = 0;

for (start; i <= end; i++) {
  if (i % 6 === 0) {
    shirts++;
  }
}
console.log(`Reikalingų marškinėlių skaičius: ${shirts}`)