function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

Book.prototype.info = function () {
  return `${this.title}. ${this.author}, ${this.pages} pages, ${this.haveRead}`;
};

Book.prototype.isRead = function () {
  this.haveRead = "Finished";
};

function addBookToLibrary(libraryArr, title, author, pages, haveRead) {
  let newBook = new Book(title, author, pages, haveRead);
  libraryArr.push(newBook);
  return libraryArr;
}

export { Book, addBookToLibrary };
