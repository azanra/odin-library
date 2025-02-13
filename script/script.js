import { addBookToLibrary } from "./model/book.js";

let myLibrary = [];

myLibrary = addBookToLibrary(
  myLibrary,
  "Three days of happiness",
  "sugaru miaki",
  512,
  "have read"
);

const para = document.querySelector("p");
para.textContent = myLibrary[0].info();
