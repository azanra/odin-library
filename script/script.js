import { NewBookControlller } from "./controller/newBookController.js";
import { addBookToLibrary } from "./model/book.js";
import { bookCard } from "./view/bookCard.js";

let myLibrary = [];

myLibrary = addBookToLibrary(
  myLibrary,
  "Three days of happiness",
  "sugaru miaki",
  512,
  "finished"
);

myLibrary = addBookToLibrary(
  myLibrary,
  "Your Story",
  "sugaru miaki",
  498,
  "finished"
);

console.log(myLibrary);

bookCard(myLibrary);

myLibrary = NewBookControlller(myLibrary);
