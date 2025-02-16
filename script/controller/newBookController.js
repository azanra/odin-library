import { CreateElement } from "../view/createElement.js";
import { elementAttr } from "../view/elementAttr.js";
import { Form } from "../view/form.js";

function NewBookControlller() {
  const inputBtn = document.querySelector(".input-btn");
  inputBtn.addEventListener("click", () => {
    let form = new Form();
    const dialog = document.querySelector(".form-dialog");
    dialog.showModal();
    closeBtnListener(dialog);
  });
}

function closeBtnListener(dialog) {
  const closeBtn = document.querySelector("#cancel-btn");
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
}

export { NewBookControlller };
