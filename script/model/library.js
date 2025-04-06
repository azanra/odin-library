import { Book } from "./book.js";

export class Library {
  #library;
  constructor() {
    this.#library = [];
  }
  addBook(title, author, pages, haveRead) {
    const book = new Book(title, author, pages, haveRead);
    this.#library.push(book);
  }
  removeBook(inputBookId) {
    const updateLibrary = this.#library.filter(
      (book) => book.id !== inputBookId
    );
    this.#library = updateLibrary;
  }
  updateBook(inputBookId) {
    this.#library.map((book) => {
      if (book.id === Number(inputBookId)) {
        book.isRead();
      }
    });
  }
}
