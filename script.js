const myLibrary = [];

const logo = document.getElementById("logo_head");

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
  let bookRead = document.getElementById("book_read").checked
    ? "Read"
    : "Not Read";

  let bookAdd = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.push(bookAdd);

  const booksContainer = document.querySelector(".main");

  if (myLibrary.length > 0) {
    const bookElement = document.createElement("div");
    bookElement.className = "card";
    bookElement.innerHTML = `<h2>${bookTitle}</h2>
    <p><strong>Author: </strong>${bookAuthor}</p>
    <p><strong>Pages: </strong>${bookPages}</p>`;

    booksContainer.appendChild(bookElement);

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "<strong>Remove</strong>";
    removeButton.className = "removeBtn";
    bookElement.appendChild(removeButton);

    // Attach event listener to remove button
    removeButton.addEventListener("click", () => {
      removeBook(bookAdd, bookElement);
    });

    booksContainer.appendChild(bookElement);

    // Change classes depending on read or not
    if (myLibrary.length > 0) {
      const bookElementBtn = document.createElement("button");
      bookElementBtn.innerHTML = `<strong>${bookRead}</strong>`;
      bookElement.appendChild(bookElementBtn);

      switch (bookRead) {
        case "Read":
          bookElementBtn.className = "buttonGreen readNotRead";
          break;
        case "Not Read":
          bookElementBtn.className = "buttonRed readNotRead";
          break;
      }

      bookElementBtn.addEventListener("click", () => {
        changeReadStatus(bookElementBtn);
      });
    }
  }
}

function changeReadStatus(btn) {
  if (btn.classList.contains("buttonRed")) {
    btn.classList.toggle("buttonRed");
    btn.classList.add("buttonGreen");
    btn.innerHTML = "<strong>Read</strong>";
  } else {
    btn.classList.toggle("buttonGreen");
    btn.classList.add("buttonRed");
    btn.innerHTML = "<strong>Not Read</strong>";
  }
}

function removeBook(book, bookElement) {
  const index = myLibrary.indexOf(book);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    bookElement.remove();
  }
}

// Show dialog
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Close form button & Add book button
closeButton.addEventListener("click", () => {
  addBookToLibrary();
  document.querySelector("form").reset();
  dialog.close();
});

logo.addEventListener("click", () => {
  location.reload();
});
