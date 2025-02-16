import { NewBookControlller } from "./controller/newBookController.js";
import { addBookToLibrary } from "./model/book.js";
import { bookCard } from "./view/bookCard.js";

let myLibrary = [];

myLibrary = addBookToLibrary(
  myLibrary,
  "Three days of happiness",
  "sugaru miaki",
  512,
  "read"
);

myLibrary = addBookToLibrary(
  myLibrary,
  "Your Story",
  "sugaru miaki",
  498,
  "read"
);

console.log(myLibrary);

bookCard(myLibrary);

myLibrary = NewBookControlller(myLibrary);
