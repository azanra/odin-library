import { Util } from "../util/util.js";
import { elementAttr } from "./elementAttr.js";

export class BookCard {
  constructor(library) {
    const libraryArr = library.getLibrary();
    libraryArr.forEach((book, index) => {
      const attr = {};
      attr.id = index;
      Util.CreateElement(
        elementAttr.bookContainer.parent,
        elementAttr.bookContainer.element,
        attr
      );
      Util.CreateElement(
        `[id='${attr.id}']`,
        elementAttr.bookPara.element,
        elementAttr.bookPara.attr,
        book.info()
      );
      Util.CreateElement(
        `[id='${attr.id}']`,
        elementAttr.deleteBtn.element,
        elementAttr.deleteBtn.attribute,
        elementAttr.deleteBtn.text
      );
      this.toggleReadBtn(book, `[id='${attr.id}']`);
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
