const cookiesFromTautvydas = parseInt(
  prompt("Kiek sausainių iškepė Tautvydas?")
);
const cookiesFromFrends = parseInt(
  prompt("Keli draugai dar atsinešė po tiek pat sausainių?")
);
const peopleInParty = parseInt(
  prompt("Kiek žmonių iš viso dalyvavo šventėje?")
);
const cookiesInParty =
  cookiesFromTautvydas + cookiesFromTautvydas * cookiesFromFrends;
const everyMemberGet = ~~(cookiesInParty / peopleInParty);
const tautvydasGet = cookiesInParty % peopleInParty;
console.log(`Kiekvienas šventės dalyvis gavo po ${everyMemberGet} sausainius`);
console.log(`Tautvydui papildomai atiteko ${tautvydasGet} sausainiai`);
