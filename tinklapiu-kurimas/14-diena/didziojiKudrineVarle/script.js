const weight = parseInt(prompt("Kiek sveria varlė?"));
const monitoringUnits = parseInt(prompt("Kiek varlių norima stebėti?"));

const allFrogsWeight = weight * monitoringUnits;

if (allFrogsWeight > 5000) {
  console.log("Varlių stebėjimui pakanka");
} else {
  console.log("Varlių stebėjimui per maža");
}
