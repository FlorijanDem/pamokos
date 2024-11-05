const input = prompt("Kokius pažymius gavo Petriukas?");
let assessment = input.split(" ");
assessment = assessment.map(Number);

let sum = 0;

for (let i = 0; i < assessment.length; i++) {
  sum += assessment[i];
}

let count = 0;

for (let i = 0; i < assessment.length; i++) {
  if (typeof assessment[i] === "number") {
    count++;
  }
}

const average = sum / count;

if (average > 9) {
  console.log("Petriukas gaus tris saldainius");
} else if (average < 9 && average > 7) {
  console.log("Petriukas gaus du saldainius");
} else {
  console.log("Petriukas gaus vieną saldainį");
}
