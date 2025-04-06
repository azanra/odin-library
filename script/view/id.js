import { CreateElement } from "./createElement.js";
import { elementAttr } from "./elementAttr.js";

export class Id {
  constructor() {
    CreateElement(
      elementAttr.idContainer.parent,
      elementAttr.idContainer.element,
      elementAttr.idContainer.attribute
    );
    CreateElement(
      elementAttr.idLabel.parent,
      elementAttr.idLabel.element,
      elementAttr.idLabel.attribute,
      elementAttr.idLabel.textContent
    );
    CreateElement(
      elementAttr.idInput.parent,
      elementAttr.idInput.element,
      elementAttr.idInput.attribute
    );
  }
}
