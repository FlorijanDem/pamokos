function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function numberGuessingGame() {
  while ((playAGame = true)) {
    const play = prompt("Ar norite spėti skaičių?");
    if (play == "Taip") {
      const inputNumber = parseInt(prompt("Įveskite skaičių: "));
      randomNumber = getRandomInt(10);
      console.log(randomNumber);
      if (inputNumber == randomNumber) {
        alert("Atspėjote teisingai!");
        console.log("Atspėjote teisingai!");
      } else {
        continue;
      }
    } else if (play == "Ne") {
      break;
    }
  }
}
numberGuessingGame();
