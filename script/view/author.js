import { Util } from "../util/util.js";
import { elementAttr } from "./elementAttr.js";

export class AuthorInput {
  constructor() {
    Util.CreateElement(
      elementAttr.authorContainer.parent,
      elementAttr.authorContainer.element,
      elementAttr.authorContainer.attribute
    );
    Util.CreateElement(
      elementAttr.authorLabel.parent,
      elementAttr.authorLabel.element,
      elementAttr.authorLabel.attribute,
      elementAttr.authorLabel.text
    );
    Util.CreateElement(
      elementAttr.authorInput.parent,
      elementAttr.authorInput.element,
      elementAttr.authorInput.attribute
    );
  }
}
