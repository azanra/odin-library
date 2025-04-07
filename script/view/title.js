import { CreateElement } from "./createElement.js";
import { elementAttr } from "./elementAttr.js";

export class Title {
  constructor() {
    CreateElement(
      elementAttr.titleContainer.parent,
      elementAttr.titleContainer.element,
      elementAttr.titleContainer.attribute
    );
    CreateElement(
      elementAttr.titleLabel.parent,
      elementAttr.titleLabel.element,
      elementAttr.titleLabel.attribute,
      elementAttr.titleLabel.text
    );
    CreateElement(
      elementAttr.titleInput.parent,
      elementAttr.titleInput.element,
      elementAttr.titleInput.attribute
    );
  }
}
