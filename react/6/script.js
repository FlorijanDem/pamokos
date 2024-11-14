// Commented rows is also working code, just another solution

const books = [
  { title: "The time machine", price: 10.25 },
  { title: "Crime and Punishment", price: 5.15 },
  { title: "Bobok", price: 7.32 },
  { title: "Shantaram", price: 54.01 },
  { title: "Lord of the Flies", price: 77.17 },
];

function printNameAndIndex() {
  //   const array = [];
  //   for (let i = 0; i < books.length; i++) {
  //     array.push(`${books[i].title} ${i}`);
  //   }

  const array = books.map((book, index) => `${book.title} ${index}`);
  return array;
}

function howMunchBooks() {
  // let sum = 0;
  // for (let i = 0; i < books.length; i++) {
  //     sum++;
  // }
  // return sum;
  x = books.length;
  return x;
}

function addTheBook(inputTitle, inputPrice) {
  books.push({ title: inputTitle, price: inputPrice });
  return books;
}

function theLastBook() {
  const lastBook = books[books.length - 1];
  return lastBook;
}

function sumOfThePriceOfAllBooks() {
  let sum = 0;
  for (let i = 0; i < books.length; i++) {
    sum += books[i].price;
  }
  return sum;
}

function addDiscount() {
  const result = ["!!! Nukainuota !!!"];
  for (let i = 0; i < books.length; i++) {
    if (books[i].price > 10) {
      result.push(
        `Knyga: ${books[i].title} Sena kaina: ${
          books[i].price
        } Pardavimo kaina: ${books[i].price * 0.75} Pritaikyta nuolaida: -25%`
      );
    }
  }
  return result;
}

function fromChepestToMostExpensive() {
  const result = [...books];
  result.sort((a, b) => a.price - b.price);
  return result;
}

function fromAToZAndFromZToA() {
  const aToZ = [...books].sort((a, b) => a.title.localeCompare(b.title));
  const zToA = [...books].sort((a, b) => b.title.localeCompare(a.title));
  result = [aToZ, zToA];
  return result;
}

function moreExpensiveThan() {
  const result = books.filter((book) => book.price > 7.5);
  return result;
}

console.log(printNameAndIndex());
console.log(howMunchBooks());
console.log(addTheBook("Knyga #6", 2.75));
console.log(theLastBook());
console.log(sumOfThePriceOfAllBooks());
console.log(addDiscount());
console.log(fromChepestToMostExpensive());
console.log(fromAToZAndFromZToA());
console.log(moreExpensiveThan());
