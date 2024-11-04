const dailyCandy = parseInt(prompt("Kiek saldainių gauna Marius?"));
const dailyCandyShallow = parseInt(prompt("Po kiek saldainių suvalgo?"));
const dayToCristmas = parseInt(prompt("Kelios dienos liko iki Kalėdų?"));
const havingCandyOnCristmas =
  dailyCandy * dayToCristmas - dailyCandyShallow * dayToCristmas;
const candyForFreands = ~~(havingCandyOnCristmas / dailyCandyShallow);
const unusedCandy = havingCandyOnCristmas % dailyCandyShallow;
console.log(`Marius dovanas paruoš ${candyForFreands} draugų.`);
console.log(`Supakavus dovanas liks ${unusedCandy} saldainiai.`);
