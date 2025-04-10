import { Library } from "../model/library.js";
import { Util } from "../util/util.js";
import { BookCard } from "../view/bookCard.js";
import { FormInput } from "../view/form.js";

export class Controller {
  constructor() {
    this.library = new Library();
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
      const idInputValue = Util.getElementValue("#id-input");
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
        let bookId = item.parentNode.id;
        this.library.removeBook(bookId);
        this.resetView();
      });
    });
  }
  readBtnListener() {
    this.readBtn = document.querySelectorAll("#read-btn");
    this.readBtn.forEach((item) => {
      item.addEventListener("click", () => {
        const bookId = item.parentNode.id;
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
