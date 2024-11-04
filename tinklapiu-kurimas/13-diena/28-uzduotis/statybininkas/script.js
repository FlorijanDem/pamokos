const lenght = parseInt(prompt("Sienos ilgis"));
const height = parseInt(prompt("Sienos aukštis"));
const unitPrice = parseFloat(prompt("Plytos kaina"));
const unitNeeded = (lenght * 100 / 20) * (height * 100 / 10);
const neededPrice = unitNeeded * unitPrice;
console.log(`Plytų kiekis: ${unitNeeded}`)
console.log(`Plytos kainuos ${neededPrice} LT`)