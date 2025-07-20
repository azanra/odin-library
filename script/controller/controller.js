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
      this.validatePageAmountListener();
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
    this.submitBtn = document.querySelector(".form-input");
    this.submitBtn.addEventListener("submit", (e) => {
      e.preventDefault();
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
  validatePageAmount() {
    const pageInput = document.querySelector("#page-input");
    if (pageInput.validity.rangeUnderflow) {
      pageInput.setCustomValidity(
        `The minimum page inputted page should be at least greater than ${pageInput.min} pages`
      );
    } else if (pageInput.validity.rangeOverflow) {
      pageInput.setCustomValidity(  
        `The maximum page inputted page should be at least less than ${pageInput.max} pages`
      );
    } else {
      pageInput.setCustomValidity("");
    }
  }
  validatePageAmountListener() {
    const pageInput = document.querySelector("#page-input");
    pageInput.addEventListener("input", this.validatePageAmount);
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
