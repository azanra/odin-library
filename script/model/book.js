export class Book {
  constructor(id, title, author, pages, haveRead) {
    this.id = id;
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
