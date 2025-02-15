import { setMultipleAttr } from "../util/util.js";

function CreateElement(parent, element, elementAttr, text) {
  const parentEle = document.querySelector(parent);
  const newElement = document.createElement(element);
  setMultipleAttr(newElement, elementAttr);
  newElement.textContent = text;
  parentEle.append(newElement);
}

export { CreateElement };
