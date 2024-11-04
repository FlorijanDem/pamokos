const cars = parseInt(prompt("Automobilių skaičius:"));
const ferryCanAccommodate = parseInt(prompt("Į keltą telpa automobilių"));
console.log("Perkels per kartų: " + ~~(cars / ferryCanAccommodate));
console.log("Liks neperkelta: " + (cars % ferryCanAccommodate));
