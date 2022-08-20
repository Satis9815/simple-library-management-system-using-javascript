console.log("Welcome to the library management Sysytem");
function Book(name, author) {
  this.name = name;
  this.author = author;
}

function Display() {}
Display.prototype.add = function (book, index) {
  let tbody = document.getElementById("tbody");
  let html = `
    <tr>
        <td>${index}</td>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td><button id="${index}" onclick="deleteBooks(this.id)">del</button>
        <button id="${index}" onclick="editBooks(this.id)">edit</button>
        </td>
    </tr>
    `;
  tbody.innerHTML += html;
};
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

let formBtn = document.getElementById("libraryForm");
formBtn.addEventListener("submit", formSubmitBtn);
var index = 1;
function formSubmitBtn(e) {
  e.preventDefault();
  let bookName = document.getElementById("bookName").value;
  let authorName = document.getElementById("authorName").value;
  if (bookName.length < 2 || authorName.length < 2) {
    alert("Pleae enter the valid book name");
  } else {
    let book = new Book(bookName, authorName);
    let display = new Display();
    display.add(book, index);
    display.clear();
    index++;
  }
}

function deleteBooks(index) {
  let deleteBook = document.getElementById(`${index}`);
  let deletedBook = deleteBook.parentElement.parentElement;
  deletedBook.style.display = "none";
}

function editBooks(index) {
  let editBook = document.getElementById(`${index}`);
  let a = editBook.parentElement.parentElement;
  let editBookName = a.children[1];
  let editAuthorName = a.children[2];
  let editBookNameValue = prompt("Edit your bookName");
  let editAuthorNameValue = prompt("Edit author name");
  if (editBookNameValue !== null && editBookNameValue !== "") {
    if (editBookNameValue.length > 2) {
      editBookName.innerText = editBookNameValue;
    } else {
      alert("Book name should be 2 character");
    }
  } else {
    editBookName = editBook.parentElement.parentElement.children[1].innerText;
  }
  if (editAuthorNameValue !== null && editAuthorNameValue !== "") {
    if (editAuthorNameValue.length > 2) {
      editAuthorName.innerText = editAuthorNameValue;
    } else {
      alert("Author name should be a 2 character");
    }
  } else {
    editAuthorName = editBook.parentElement.parentElement.children[2].innerText;
  }
  console.log(editBookName, editAuthorName);
}
