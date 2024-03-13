const myLibrary = [];

// Constructor
function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const book1 = new Book("THe Hobbit", "JJR Rolling", "293", "read");
console.log(book1.name);

const book2 = new Book("Harry Potter", "Tedious", "300", "not read");
console.log(book2.name);

function addBookToLibrary() {
  let userInput = [];
  myLibrary.push(userInput);
}

myLibrary.push(book1);
myLibrary.push(book2);
