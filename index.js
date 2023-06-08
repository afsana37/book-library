
    let myLibrary = [];

    function Book(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }

    function addBookToLibrary(book) {
      myLibrary.push(book);
    }

    function renderLibrary() {
      const libraryContainer = document.getElementById('libraryContainer');
      libraryContainer.innerHTML = '';

      myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;

        const read = document.createElement('p');
        read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeBook(index));

        const toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = 'Toggle Read';
        toggleReadButton.addEventListener('click', () => toggleReadStatus(index));

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(removeButton);
        card.appendChild(toggleReadButton);

        libraryContainer.appendChild(card);
      });
    }

    function removeBook(index) {
      myLibrary.splice(index, 1);
      renderLibrary();
    }

    function toggleReadStatus(index) {
      myLibrary[index].read = !myLibrary[index].read;
      renderLibrary();
    }

    function showForm() {
      const form = document.getElementById('newBookForm');
      form.style.display = 'block';
    }

    function hideForm() {
      const form = document.getElementById('newBookForm');
      form.style.display = 'none';
    }

    function addBookFromForm(event) {
      event.preventDefault();

      const titleInput = document.getElementById('titleInput');
      const authorInput = document.getElementById('authorInput');
      const pagesInput = document.getElementById('pagesInput');
      const readInput = document.getElementById('readInput');

      const newBook = new Book(
        titleInput.value,
        authorInput.value,
        parseInt(pagesInput.value),
        readInput.checked
      );

      addBookToLibrary(newBook);
      renderLibrary();
      hideForm();
      event.target.reset();
    }

    const newBookButton = document.getElementById('newBookButton');
    newBookButton.addEventListener('click', showForm);

    const newBookForm = document.getElementById('newBookForm');
    newBookForm.addEventListener('submit', addBookFromForm);

    // Manually add some books for demonstration
    const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218, true);
    const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 324, false);
    const book3 = new Book('1984', 'George Orwell', 328, true);
    const book4 = new Book('Pride and Prejudice', 'Jane Austen', 432, false);
    const book5 = new Book('The Hobbit', 'J.R.R. Tolkien', 310, true);
    const book6 = new Book('The Catcher in the Rye', 'J.D. Salinger', 277, false);
    const book7 = new Book('Moby-Dick', 'Herman Melville', 585, true);
    const book8 = new Book('Brave New World', 'Aldous Huxley', 311, false);
    const book9 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1137, true);
    const book10 = new Book('Alice\'s Adventures in Wonderland', 'Lewis Carroll', 200, true);

    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
    addBookToLibrary(book4);
    addBookToLibrary(book5);
    addBookToLibrary(book6);
    addBookToLibrary(book7);
    addBookToLibrary(book8);
    addBookToLibrary(book9);
    addBookToLibrary(book10);

    renderLibrary();