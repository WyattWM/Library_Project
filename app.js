console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

// Define the Book class
class Book {
    constructor(title, author, read) {
      this.title = title;
      this.author = author;
      this.read = read;
    }
  }
  
  // Define the Library class
  class Library {
    constructor() {
      this.bookCount = 0;
      this.books = [];
    }
  
    // Method to mark a book as read
    markRead(checkbox, id) {
      this.books.forEach(book => {
        if (book.id === id) {
          book.read = true;
          checkbox.checked = true;
          checkbox.disabled = true;
        }
      });
    }
  
    // Method to add a new book to the library
    addBook() {
      // Select the input values
      const title = document.getElementById('bookTitle').value;
      const author = document.getElementById('authorName').value;
      const read = document.getElementById('readCheckbox').checked;
  
      // Create a new book instance
      const newBook = new Book(title, author, read);
  
      // Create a new table row and cells
      const newRow = document.createElement('tr');
      const titleCell = document.createElement('td');
      const authorCell = document.createElement('td');
      const readCell = document.createElement('td');
      const readCheckbox = document.createElement('input');
      readCheckbox.type = 'checkbox';
      readCheckbox.checked = read;
      readCheckbox.disabled = read;
  
      // Set the cell values
      titleCell.textContent = newBook.title;
      authorCell.textContent = newBook.author;
      readCell.appendChild(readCheckbox);
  
      // Append the cells to the row
      newRow.appendChild(titleCell);
      newRow.appendChild(authorCell);
      newRow.appendChild(readCell);
  
      // Select the table body and append the new row
      const tableBody = document.getElementById('table').querySelector('tbody');
      tableBody.appendChild(newRow);
  
      // Add the new book to the books array and increment book count
      this.books.push(newBook);
      this.bookCount++;
    }
  }
  
  // Create a new library instance
  const myLibrary = new Library();
  
  // Select the Add Book button and add an event listener
  const addBookButton = document.querySelector('button[type="submit"]');
  addBookButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    myLibrary.addBook();
  
    // Clear the form inputs after adding the book
    document.getElementById('bookTitle').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('readCheckbox').checked = false;
  });
  