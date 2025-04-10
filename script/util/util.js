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
