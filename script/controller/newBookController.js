import { CreateElement } from "../view/createElement.js";
import { elementAttr } from "../view/elementAttr.js";
import { Form } from "../view/form.js";
import { getElementValue } from "../util/util.js";

function NewBookControlller(libraryArr) {
  const inputBtn = document.querySelector(".input-btn");
  inputBtn.addEventListener("click", () => {
    let form = new Form();
    const dialog = document.querySelector(".form-dialog");
    dialog.showModal();
    closeBtnListener(dialog);
    submitBtnListener(dialog, libraryArr);
  });
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
    let titleValue = getElementValue("#title-input");
    let authorValue = getElementValue("#author-input");
    let pageValue = getElementValue("#page-input");
    let selectValue = getElementValue("#read-select");
    dialog.close();
  });
}

export { NewBookControlller };
