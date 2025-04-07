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
    library.forEach((index) => {
      const book = document.querySelector(`[id='${index}']`);
      book.remove();
    });
  }
  static removeElement(query) {
    let element = document.querySelector(query);
    if (element !== null) {
      element.remove();
    }
  }
}
