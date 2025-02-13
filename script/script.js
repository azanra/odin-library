import Book from "./model/book.js";

const firstBook = new Book(
  "Three days of happiness",
  "sugaru miaki",
  512,
  "have read"
);

const para = document.querySelector("p");
para.textContent = firstBook.info();
