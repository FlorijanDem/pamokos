const fiveCents = parseInt(prompt("Kiek yra monetų po 5 ct?"));
const twentyCents = parseInt(prompt("Kiek yra monetų po 20 ct?"));
const twoLits = parseInt(prompt("Kiek yra monetų po 2 Lt?"));

const rez = fiveCents * 0.05 + twentyCents * 0.20 + twoLits * 2.00;
console.log(`Taupyklėje yra ${rez} Lt.`)