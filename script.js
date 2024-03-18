const myLibrary = [];

// Form dialog

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".btn_newBook");
const closeButton = document.querySelector(".add_button");

// Constructor
function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // Form values variables
  let bookTitle = document.getElementById("book_title").value;
  let bookAuthor = document.getElementById("book_author").value;
  let bookPages = document.getElementById("book_pages").value;
  let bookRead = document.getElementById("book_read");

  if (!bookRead.checked === true) {
    bookRead = "Not Read";
  } else {
    bookRead = document.getElementById("book_read").value;
  }

  let bookAdd = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.push(bookAdd);

  const booksContainer = document.querySelector(".main");

  if (myLibrary.length > 0) {
    const bookElement = document.createElement("div");
    bookElement.className = "card";
    bookElement.innerHTML = `<h2>${myLibrary[myLibrary.length - 1].name}</h2>
    <p><strong>Author: </strong>${myLibrary[myLibrary.length - 1].author}</p>
    <p><strong>Pages: </strong>${myLibrary[myLibrary.length - 1].pages}</p>
    <button class='readNotRead'><strong>${
      myLibrary[myLibrary.length - 1].read
    }</strong></button>
    <button class='removeBtn'><strong>Remove</strong></button>`;

    booksContainer.appendChild(bookElement);
  }
}

// Show dialog
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Close form button & Add book button
closeButton.addEventListener("click", () => {
  addBookToLibrary();
  dialog.close();
});
