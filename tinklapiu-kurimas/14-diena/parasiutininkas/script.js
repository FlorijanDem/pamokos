let acceleration = 9.8;
const height = parseFloat(prompt("Iš kokio aukščio šoka parašiutininkas?"));
const parachute = parseFloat(
  prompt("Per kiek sekundžių išsiskleidžia jo parašiutas?")
);
const fallSpeed = Math.sqrt((2 * height) / acceleration);

const timeBeforeCrash = fallSpeed - parachute;

if (timeBeforeCrash > 0) {
  console.log("Parašiutas išsiskleis");
} else {
  console.log("Parašiutas neišsiskleis");
}
