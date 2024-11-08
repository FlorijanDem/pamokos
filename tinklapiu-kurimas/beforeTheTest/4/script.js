const names = ["Jonas", "Domas", "Tomas", "Rasa", "Gintarė"];

function addName(toAdd, array) {
  array.unshift(toAdd);
}
function removeName(toRemove, array) {
  const index = array.indexOf(toRemove);
  if (index > -1) {
    array.splice(index, 1);
  }
}
removeName("Domas", names);
addName("Karolis", names);

console.log(names);

const namesAndCo = [...names];

function addValueToValue(toAdd, array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + toAdd;
  }
  return array;
}
console.log(addValueToValue("&Co", namesAndCo));

let sortedNames = namesAndCo.sort();
console.log(sortedNames);
