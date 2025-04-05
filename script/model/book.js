class Book {
  constructor(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
  }
  info() {
    return `${this.title}, ${this.author}, ${this.pages} pages, ${this.haveRead}`;
  }
  isRead() {
    this.haveRead = "finished";
  }
}

function addBookToLibrary(libraryArr, title, author, pages, haveRead) {
  let newBook = new Book(title, author, pages, haveRead);
  libraryArr.push(newBook);
  return libraryArr;
}

export { Book, addBookToLibrary };
