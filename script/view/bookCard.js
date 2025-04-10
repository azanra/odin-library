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
