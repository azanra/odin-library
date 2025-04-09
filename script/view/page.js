import { Util } from "../util/util.js";
import { elementAttr } from "./elementAttr.js";

export class PageInput {
  constructor() {
    Util.CreateElement(
      elementAttr.pageContainer.parent,
      elementAttr.pageContainer.element,
      elementAttr.pageContainer.attribute
    );
    Util.CreateElement(
      elementAttr.pageLabel.parent,
      elementAttr.pageLabel.element,
      elementAttr.pageLabel.attribute,
      elementAttr.pageLabel.text
    );
    Util.CreateElement(
      elementAttr.pageInput.parent,
      elementAttr.pageInput.element,
      elementAttr.pageInput.attribute
    );
  }
}
