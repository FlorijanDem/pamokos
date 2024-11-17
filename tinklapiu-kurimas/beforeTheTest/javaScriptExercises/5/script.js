function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const resultElement = document.getElementById("bmiResult");

  if (height > 0 && weight > 0) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    resultElement.textContent = `Jūsų KMI yra ${bmi.toFixed(2)}`;
  } else {
    resultElement.textContent = "Klaida";
  }
}
