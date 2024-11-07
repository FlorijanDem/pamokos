const InSecond = parseInt(
  prompt("Įveskite, kiek snaigių nukrito per pirmąją sekundę")
);
const snowTime = parseInt(prompt("Įveskite, kiek sekundžių snigo"));

x = InSecond;
let Snowflakes = 0;

for (let i = 0; i < snowTime; i++) {
  if (i > 0) {
    x = x * 2;
  }
  Snowflakes = Snowflakes + x;
}

console.log(Snowflakes);

// const inSecondFall = 5;
// const timeOfFall = 3;
// let rezult = 0;
// let x = inSecondFall;
// let z = inSecondFall;
// for (let i = 0; i <= timeOfFall; i++) {
//     console.log(z)
//     z = inSecondFall + x;
//     x = x * 2;
//     // console.log(x)
// }
