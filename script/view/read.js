import { CreateElement } from "./createElement.js";
import { elementAttr } from "./elementAttr.js";

export class Read {
  constructor() {
    CreateElement(
      elementAttr.readContainer.parent,
      elementAttr.readContainer.element,
      elementAttr.readContainer.attribute
    );
    CreateElement(
      elementAttr.readLabel.parent,
      elementAttr.readLabel.element,
      elementAttr.readLabel.attribute,
      elementAttr.readLabel.text
    );
    CreateElement(
      elementAttr.readSelect.parent,
      elementAttr.readSelect.element,
      elementAttr.readSelect.attribute
    );
    CreateElement(
      elementAttr.haveReadOption.parent,
      elementAttr.haveReadOption.element,
      elementAttr.haveReadOption.attribute,
      elementAttr.haveReadOption.text
    );
    CreateElement(
      elementAttr.notReadOption.parent,
      elementAttr.notReadOption.element,
      elementAttr.notReadOption.attribute,
      elementAttr.notReadOption.text
    );
  }
}
