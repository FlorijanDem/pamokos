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
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function stringConcat(arr) {
  let sum = "";
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function totalVotes(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].voted == true) {
      sum++;
    }
  }
  return sum;
}

function shoppingSpree(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].price;
  }
  return sum;
}

function flatten(arr) {
  const flattenedArray = arr.flat();
  return flattenedArray;
}

function voterResults(arr) {
  let result = [];
  let numYoungVotes = 0;
  let numYoungPeople = 0;
  let numMidVotesPeople = 0;
  let numMidsPeople = 0;
  let numOldVotesPeople = 0;
  let numOldsPeople = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age <= 25) {
      numYoungPeople++;
      if (arr[i].voted === true) {
        numYoungVotes++;
      }
    }
    else if (arr[i].age > 25 && arr[i].age < 36) {
      numMidsPeople++;
      if (arr[i].voted === true) {
        numMidVotesPeople++;
      }
    }
    else if (arr[i].age > 35 && arr[i].age < 56) {
      numOldsPeople++;
      if (arr[i].voted === true) {
        numOldVotesPeople++;
      }
    }
  }
  result.push(`numYoungVotes: ${numYoungVotes}`)
  result.push(`numYoungPeople: ${numYoungPeople}`)
  result.push(`numMidVotesPeople: ${numMidVotesPeople}`)
  result.push(`numMidsPeople: ${numMidsPeople}`)
  result.push(`numOldVotesPeople: ${numOldVotesPeople}`)
  result.push(`numOldsPeople: ${numOldsPeople}`)

  return result;
}

console.log(total([1, 2, 3]));
console.log(stringConcat([1, 2, 3]));
console.log(totalVotes(voters));
console.log(shoppingSpree(wishlist));
console.log(flatten(arrays));
console.log(voterResults(voters));
