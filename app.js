console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");


class Book {
    constructor(title, author, read) {
      this.title = title;
      this.author = author;
      this.read = read;
    }
  }
  

  class Library {
    constructor() {
      this.bookCount = 0;
      this.books = [];
    }
  

    markRead(checkbox, id) {
      this.books.forEach(book => {
        if (book.id === id) {
          book.read = true;
          checkbox.checked = true;
          checkbox.disabled = true;
        }
      });
    }
  

    addBook() {

      const title = document.getElementById('bookTitle').value;
      const author = document.getElementById('authorName').value;
      const read = document.getElementById('readCheckbox').checked;
  

      const newBook = new Book(title, author, read);
  

      const newRow = document.createElement('tr');
      const titleCell = document.createElement('td');
      const authorCell = document.createElement('td');
      const readCell = document.createElement('td');
      const readCheckbox = document.createElement('input');
      readCheckbox.type = 'checkbox';
      readCheckbox.checked = read;
      readCheckbox.disabled = read;
  

      titleCell.textContent = newBook.title;
      authorCell.textContent = newBook.author;
      readCell.appendChild(readCheckbox);
  

      newRow.appendChild(titleCell);
      newRow.appendChild(authorCell);
      newRow.appendChild(readCell);
  

      const tableBody = document.getElementById('table').querySelector('tbody');
      tableBody.appendChild(newRow);
  

      this.books.push(newBook);
      this.bookCount++;
    }
  }
  

  const myLibrary = new Library();
  

  const addBookButton = document.querySelector('button[type="submit"]');
  addBookButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    myLibrary.addBook();
  

    document.getElementById('bookTitle').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('readCheckbox').checked = false;
  });
  