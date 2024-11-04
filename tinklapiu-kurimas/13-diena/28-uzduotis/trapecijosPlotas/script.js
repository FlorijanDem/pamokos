let biggerBase = parseInt(prompt("Trapecijos ilgesniojo pagrindo ilgis:"));
let lowerBase = parseInt(prompt("Trapecijos trumpesniojo pagrindo ilgis:"));
const height = parseInt(prompt("Trapecijos aukštinės ilgis:"));
const rez = lowerBase * height + ((biggerBase - lowerBase) * height) / 2;
console.log(`Trapecijos plotas: ${rez}`);
