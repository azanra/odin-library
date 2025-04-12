# odin-library

# Link

- [Live-preview](https://azanra.github.io/odin-library/)
- [Assignment-page](https://www.theodinproject.com/lessons/node-path-javascript-library)

# About

This project focus on using protoype property on an object constructor
to create a method by referencing prototype object. So that every instance of that constructor can use the method from the prototype of construct,The instance should inheriting the prototype from the constructor. Javascript will start looking for the method from the bottom to up. starting from the object instance itself, then constructor,
and finally protoype of the constructor. The user can input a book from the modal, update the read status, or delete it altogether.

# Review

This assignment is not really that hard, because i have done similiar project. for the javascript course i feel like there is a much more project. every reading there is immediate project for practice. not like
previous section where it will take a long time before each project. that's why i use half of my studies time to practice by creating something. but because of javascript section have a lot more project, i suddenly have multiple project that i need to work on (including project
for react practice study session). i wonder if i split my focus on so many thing.

# Update

- Refactored to using class instead of of normal function and constructor

Before

```js
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
  this.haveRead = "finished";
};
```

After

```js
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
```

How they works is still similiar, since it only a syntatic sugar, the constructor got turned into book function constructor, and the method will be added as prototype propperty of book object.

There are some difference though, like how class have their own internal property set so that they can only be called with new. and how it uses strict mode, and it method can't be looped through with for in loop.

how it inheritance is also the same by inheriting all of it prototype of method and property of it parent by using extends and calling it parent constructor by using super method, similiar to how setprototype in constructor inheritance.

There is also getter and settter to get and set a value of property. and static which mean a property or method that available on the class instead of object instance.

and private property which use hash as prefix and cant be accessed outside of the class, so you can decide the only way to interact with it either with getter and setter. similiar to how not returning all of property in object. in factory function.

- All of them used to be individual function so to import and export it, it need to be individually type, now it grouped as an object, reducing the amount of text needed when exporting or importing

Before

```js
function setMultipleAttr(element, obj) {
  for (let key in obj) {
    element.setAttribute(key, obj[key]);
  }
}

function getElementValue(element) {
  const getElement = document.querySelector(element);
  return getElement.value;
}

function removeList(libraryArr) {
  for (let i = 0; i < libraryArr.length; i++) {
    let elementList = document.querySelector(`[id='${i}']`);
    elementList.remove();
  }
}

function removeElement(elementToDel) {
  let refELe = document.querySelector(elementToDel);
  if (refELe !== null) {
    refELe.remove();
  }
}

function removeBook(libraryArr, index) {
  for (let i = 0; i < libraryArr.length; i++) {
    if (i === Number(index)) {
      libraryArr.splice(index, 1);
    }
  }
}

function updateBook(libraryArr, index) {
  for (let i = 0; i < libraryArr.length; i++) {
    if (i === Number(index)) {
      libraryArr[i].isRead();
    }
  }
}

export {
  setMultipleAttr,
  getElementValue,
  removeList,
  removeElement,
  removeBook,
  updateBook,
};
```

After

```js
export class Util {
  static setMultipleAttr(element, attribute) {
    for (let key in attribute) {
      element.setAttribute(key, attribute[key]);
    }
  }
  static getElementValue(element) {
    const getElement = document.querySelector(element);
    return getElement.value;
  }
  static removeAllBook(library) {
    const libraryArr = library.getLibrary();
    libraryArr.forEach((book) => {
      Util.removeElement(`[id='${book.id}']`);
    });
  }
  static removeElement(query) {
    let element = document.querySelector(query);
    if (element !== null) {
      element.remove();
    }
  }
  static CreateElement(parent, element, elementAttr, text) {
    const parentEle = document.querySelector(parent);
    const newElement = document.createElement(element);
    Util.setMultipleAttr(newElement, elementAttr);
    newElement.textContent = text;
    parentEle.append(newElement);
  }
}
```

- Library array used to be global variable. and the method to input, remove, and edit book used to be individual method in util function, making it hard to read and there are need to pass it on each function as argument. Now it is individual object that helps to group and is one entity as a whole and by placing the library array as property, there is no need to pass is as argument

Before

```js
import { NewBookControlller } from "./controller/newBookController.js";

let myLibrary = [];

myLibrary = NewBookControlller(myLibrary);

function addBookToLibrary(libraryArr, title, author, pages, haveRead) {
  let newBook = new Book(title, author, pages, haveRead);
  libraryArr.push(newBook);
  return libraryArr;
}
```

After

```js
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
      if (book.id === inputBookId) {
        book.isRead();
      }
    });
  }
  getLibrary() {
    return this.#library;
  }
}
```

- Bookcard not using createElement method that already exist, because of i don't know how to make the attribute of element unique. Now using the the createElement method and for the unique id, now they got it from the book id that appended to the attribute id object

Before

```js
function bookCard(libraryArr) {
  for (let i = 0; i < libraryArr.length; i++) {
    const container = document.querySelector(".container");
    let bookContainer = document.createElement("div");
    bookContainer.setAttribute("id", i);
    container.append(bookContainer);
    let bookPara = document.createElement("p");
    bookPara.textContent = libraryArr[i].info();
    bookContainer.append(bookPara);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("id", "delete-btn");
    bookContainer.append(deleteBtn);
    toggleReadBtn(libraryArr[i], bookContainer);
  }
}

function toggleReadBtn(libraryArr, parentEle) {
  if (libraryArr.haveRead !== "finished") {
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Have Read";
    updateBtn.setAttribute("id", "read-btn");
    parentEle.append(updateBtn);
  }
}

export { bookCard };
```

After

```js
import { Util } from "../util/util.js";
import { elementAttr } from "./elementAttr.js";

export class BookCard {
  constructor(library) {
    const libraryArr = library.getLibrary();
    libraryArr.forEach((book) => {
      const attr = {};
      attr.id = book.id;
      Util.CreateElement(
        elementAttr.bookContainer.parent,
        elementAttr.bookContainer.element,
        attr
      );
      Util.CreateElement(
        `[id='${book.id}']`,
        elementAttr.bookPara.element,
        elementAttr.bookPara.attr,
        book.info()
      );
      Util.CreateElement(
        `[id='${book.id}']`,
        elementAttr.deleteBtn.element,
        elementAttr.deleteBtn.attribute,
        elementAttr.deleteBtn.text
      );
      this.toggleReadBtn(book, `[id='${book.id}']`);
    });
  }
  toggleReadBtn(book, parentElement) {
    if (book.haveRead !== "finished") {
      Util.CreateElement(
        parentElement,
        elementAttr.readBtn.element,
        elementAttr.readBtn.attribute,
        elementAttr.readBtn.text
      );
    }
  }
}
```

-Add an id attribute that automatically generated instead of array index

```js
import { Library } from "../model/library.js";
import { Util } from "../util/util.js";
import { BookCard } from "../view/bookCard.js";
import { FormInput } from "../view/form.js";

export class Controller {
  constructor() {
    this.library = new Library();
    this.id = 0;
    this.inputBtn = document.querySelector(".input-btn");
    this.inputBtn.addEventListener("click", () => {
      Util.removeElement(".form-dialog");
      const formInput = new FormInput();
      this.dialog = document.querySelector(".form-dialog");
      this.dialog.showModal();
      this.submitBtnListener();
      this.cancelBtnListener();
    });
  }
  cancelBtnListener() {
    this.cancelBtn = document.querySelector("#cancel-btn");
    this.cancelBtn.addEventListener("click", () => {
      this.dialog.close();
    });
  }
  submitBtnListener() {
    this.submitBtn = document.querySelector("#submit-btn");
    this.submitBtn.addEventListener("click", () => {
      Util.removeAllBook(this.library);
      const idInputValue = this.id;
      const titleInputValue = Util.getElementValue("#title-input");
      const authorInputValue = Util.getElementValue("#author-input");
      const pageInputValue = Util.getElementValue("#page-input");
      const readInputValue = Util.getElementValue("#read-select");
      this.library.addBook(
        idInputValue,
        titleInputValue,
        authorInputValue,
        pageInputValue,
        readInputValue
      );
      this.id++;
      this.bookCard = new BookCard(this.library);
      this.deleteBtnListener();
      this.readBtnListener();
      this.dialog.close();
    });
  }
  deleteBtnListener() {
    this.listDeleteBtn = document.querySelectorAll("#delete-btn");
    this.listDeleteBtn.forEach((item) => {
      item.addEventListener("click", () => {
        Util.removeAllBook(this.library);
        let bookId = Number(item.parentNode.id);
        this.library.removeBook(bookId);
        this.resetView();
      });
    });
  }
  readBtnListener() {
    this.readBtn = document.querySelectorAll("#read-btn");
    this.readBtn.forEach((item) => {
      item.addEventListener("click", () => {
        const bookId = Number(item.parentNode.id);
        this.library.updateBook(bookId);
        Util.removeAllBook(this.library);
        this.resetView();
      });
    });
  }
  resetView() {
    this.bookCard = new BookCard(this.library);
    this.deleteBtnListener();
    this.readBtnListener();
  }
}
```

# Screenshot

![alt-text](./image/library-ui.png)
