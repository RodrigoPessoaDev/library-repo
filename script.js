const myLibrary = [];

// Form dialog

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".btn_newBook");
const closeButton = document.querySelector(".add_button");

// Form values
const bookTitle = document.getElementById("book_title");
const bookAuthor = document.getElementById("book_author");
const bookPages = document.getElementById("book_pages");
const bookRead = document.getElementById("book_read");

// Constructor
function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Testing
const book1 = new Book("The Hobbit", "JJR Rolling", "293", "read");
const book2 = new Book("Harry Potter", "Tedious", "300", "not read");
const book3 = new Book(
  "Poor Dad Rich Dad",
  "Rodrigo Pessoa",
  "300",
  "not read"
);
myLibrary.push(book1);
myLibrary.push(book1);
myLibrary.push(book1);

function addBookToLibrary() {
  let userInput = [];
  myLibrary.push(userInput);
}

// Showing books on the html grid
function displayBooks(myLibrary) {
  const booksContainer = document.querySelector(".main");

  myLibrary.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.className = "card";
    bookElement.innerHTML = `
    <h2>${book.name}</h2>
    <p><strong>Author: </strong>${book.author}</p>
    <p><strong>Pages: </strong>${book.pages}</p>
    <p>${book.read}</p>
    `;

    booksContainer.appendChild(bookElement);
  });
}

displayBooks(myLibrary);

// Show dialog
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Close form
closeButton.addEventListener("click", () => {
  dialog.close();
});
