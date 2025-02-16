import { CreateElement } from "../view/createElement.js";
import { elementAttr } from "../view/elementAttr.js";
import { Form } from "../view/form.js";
import {
  getElementValue,
  removeList,
  removeElement,
  removeBook,
  updateBook,
} from "../util/util.js";
import { addBookToLibrary } from "../model/book.js";
import { bookCard } from "../view/bookCard.js";

function NewBookControlller(libraryArr) {
  const inputBtn = document.querySelector(".input-btn");
  inputBtn.addEventListener("click", () => {
    removeElement(".form-dialog");
    let form = new Form();
    const dialog = document.querySelector(".form-dialog");
    dialog.showModal();
    closeBtnListener(dialog);
    submitBtnListener(dialog, libraryArr);
  });
  return libraryArr;
}

function closeBtnListener(dialog) {
  const closeBtn = document.querySelector("#cancel-btn");
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
}

function submitBtnListener(dialog, libraryArr) {
  const submitBtn = document.querySelector("#submit-btn");
  submitBtn.addEventListener("click", () => {
    removeList(libraryArr);
    let titleValue = getElementValue("#title-input");
    let authorValue = getElementValue("#author-input");
    let pageValue = getElementValue("#page-input");
    let readValue = getElementValue("#read-select");
    libraryArr = addBookToLibrary(
      libraryArr,
      titleValue,
      authorValue,
      pageValue,
      readValue
    );
    bookCard(libraryArr);
    deleteBtnListener(libraryArr);
    readBtnListener(libraryArr);
    dialog.close();
  });
}

function deleteBtnListener(libraryArr) {
  const listDeleteBtn = document.querySelectorAll("#delete-btn");
  listDeleteBtn.forEach((item) => {
    item.addEventListener("click", () => {
      let bookIndex = item.parentNode.id;
      removeList(libraryArr);
      removeBook(libraryArr, bookIndex);
      bookCard(libraryArr);
      deleteBtnListener(libraryArr);
      readBtnListener(libraryArr);
    });
  });
}

function readBtnListener(libraryArr) {
  const readBtn = document.querySelectorAll("#read-btn");
  readBtn.forEach((item) => {
    item.addEventListener("click", () => {
      let updateBookIndex = item.parentNode.id;
      removeList(libraryArr);
      updateBook(libraryArr, updateBookIndex);
      bookCard(libraryArr);
      readBtnListener(libraryArr);
      deleteBtnListener(libraryArr);
    });
  });
}

export { NewBookControlller };
