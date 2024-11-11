const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

function filterItems(array, searchQuery) {
  const sortedArray = array.sort();

  const arrayWithStars = sortedArray.map((name) => "*" + name);

  const filteredResults = arrayWithStars.filter((name) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredResults;
}

console.log(filterItems(friends, "ka"));
console.log(filterItems(friends, "e"));
