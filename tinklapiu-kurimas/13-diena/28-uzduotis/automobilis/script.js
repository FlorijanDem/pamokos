const lenght = 264;
const speed = parseInt(prompt("Koks automobilio greitis?"));
let secondsNeed = lenght / ((speed * 1000) / 60 / 60);
secondsNeed = Math.round(secondsNeed * 100) / 100;
console.log(`Automobilis tunelį pravažiuos per ${secondsNeed} s`);
