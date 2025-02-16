import { CreateElement } from "../view/createElement.js";
import { elementAttr } from "../view/elementAttr.js";
import { Form } from "../view/form.js";
import { getElementValue, removeList, removeElement } from "../util/util.js";
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
    dialog.close();
  });
}

export { NewBookControlller };
