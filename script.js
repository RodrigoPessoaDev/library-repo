const myLibrary = [];

// Constructor
function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const book1 = new Book("The Hobbit", "JJR Rolling", "293", "read");
console.log(book1.name);

const book2 = new Book("Harry Potter", "Tedious", "300", "not read");
console.log(book2.name);

const book3 = new Book(
  "Poor Dad Rich Dad",
  "Rodrigo Pessoa",
  "300",
  "not read"
);
console.log(book2.name);

function addBookToLibrary() {
  let userInput = [];
  myLibrary.push(userInput);
}

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

function displayBooks(myLibrary) {
  const booksContainer = document.querySelector(".main");

  myLibrary.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.className = "card";
    bookElement.innerHTML = `
    <h2>${book.name}</h2>
    <p><strong>Author:</strong>${book.author}</p>
    <p><strong>Pages:</strong>${book.pages}</p>
    <p>${book.read}</p>
    `;

    booksContainer.appendChild(bookElement);
  });
}

displayBooks(myLibrary);
