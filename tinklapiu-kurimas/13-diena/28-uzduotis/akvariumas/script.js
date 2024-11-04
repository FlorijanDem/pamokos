const now = parseInt(prompt("Kiek žuvų gyvena akvariume?"));
const addEveryDay = parseInt(
  prompt("Kiek žuvų į akvariumą įdedama kiekvieną dieną?")
);
const dayAfter = parseInt(prompt("Kiek dienų praėjo?"));

const rez = now + addEveryDay * dayAfter;
console.log(`Po ${dayAfter} dienų akvariume gyvens ${rez} žuvų.`);
