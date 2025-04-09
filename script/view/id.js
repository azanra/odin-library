import { Util } from "../util/util.js";
import { elementAttr } from "./elementAttr.js";

export class IdInput {
  constructor() {
    Util.CreateElement(
      elementAttr.idContainer.parent,
      elementAttr.idContainer.element,
      elementAttr.idContainer.attribute
    );
    Util.CreateElement(
      elementAttr.idLabel.parent,
      elementAttr.idLabel.element,
      elementAttr.idLabel.attribute,
      elementAttr.idLabel.textContent
    );
    Util.CreateElement(
      elementAttr.idInput.parent,
      elementAttr.idInput.element,
      elementAttr.idInput.attribute
    );
  }
}
