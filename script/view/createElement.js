import { setMultipleAttr } from "../util/util.js";
import { elementAttr } from "./elementAttr.js";

function CreateElement(parent, element, elementAttr, text) {
  const parentEle = document.querySelector(parent);
  const newElement = document.createElement(element);
  setMultipleAttr(newElement, elementAttr);
  newElement.textContent = text;
}

export { CreateElement };
