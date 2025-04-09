import { Book } from "./book.js";

export class Library {
  #library;
  constructor() {
    this.#library = [];
  }
  addBook(id, title, author, pages, haveRead) {
    const book = new Book(id, title, author, pages, haveRead);
    this.#library.push(book);
  }
  removeBook(inputBookId) {
    const updatedLibrary = this.#library.filter(
      (book) => book.id !== inputBookId
    );
    this.#library = updatedLibrary;
  }
  updateBook(inputBookId) {
    this.#library.map((book) => {
      if (book.id === Number(inputBookId)) {
        book.isRead();
      }
    });
  }
  getLibrary() {
    return this.#library;
  }
}
