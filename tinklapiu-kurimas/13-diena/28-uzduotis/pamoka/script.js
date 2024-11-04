let day1 = parseInt(prompt("Kiek pamokų yra pirmadienį?", ""));
let day2 = parseInt(prompt("Kiek pamokų yra antradienį?", ""));
let day3 = parseInt(prompt("Kiek pamokų yra trečiadienį?", ""));
let day4 = parseInt(prompt("Kiek pamokų yra ketvirtadienį?", ""));
let day5 = parseInt(prompt("Kiek pamokų yra penktadienį?", ""));

const week = day1 + day2 + day3 + day4 + day5;
const weekInMinute = week * 45;
console.log(`Pamokų skaičius: ${week}`);
console.log(`Tai sudaro minučių: ${weekInMinute}`);
