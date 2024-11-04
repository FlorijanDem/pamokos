const cups = parseInt(prompt("Puodelių, kuriuos reikia supakuoti, skaičius: "));
console.log("Pilnų dėžučių skaičius: " + ~~(cups / 3));
console.log("Nesupakuotų puodelių skaičius: " + (cups % 3));
