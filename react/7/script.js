var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function total(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function stringConcat(arr) {
  sum = "";
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function totalVotes(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].voted == true) {
      sum++;
    }
  }
  return sum;
}

function shoppingSpree(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].price;
  }
  return sum;
}

function flatten(arr) {
  const flattenedArray = arr.flat();
  return flattenedArray;
}

//Do this using if
function voterResult(arr) {}

console.log(total([1, 2, 3]));
console.log(stringConcat([1, 2, 3]));
console.log(totalVotes(voters));
console.log(shoppingSpree(wishlist));
console.log(flatten(arrays));
console.log(voterResults(voters));
