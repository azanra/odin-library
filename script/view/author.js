import { CreateElement } from "./createElement.js";
import { elementAttr } from "./elementAttr.js";

export class AuthorInput {
  constructor() {
    CreateElement(
      elementAttr.authorContainer.parent,
      elementAttr.authorContainer.element,
      elementAttr.authorContainer.attribute
    );
    CreateElement(
      elementAttr.authorLabel.parent,
      elementAttr.authorLabel.element,
      elementAttr.authorLabel.attribute,
      elementAttr.authorLabel.text
    );
    CreateElement(
      elementAttr.authorInput.parent,
      elementAttr.authorInput.element,
      elementAttr.authorInput.attribute
    );
  }
}
