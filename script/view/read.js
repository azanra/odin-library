import { Util } from "../util/util.js";
import { elementAttr } from "./elementAttr.js";

export class ReadStatusInput {
  constructor() {
    Util.CreateElement(
      elementAttr.readContainer.parent,
      elementAttr.readContainer.element,
      elementAttr.readContainer.attribute
    );
    Util.CreateElement(
      elementAttr.readLabel.parent,
      elementAttr.readLabel.element,
      elementAttr.readLabel.attribute,
      elementAttr.readLabel.text
    );
    Util.CreateElement(
      elementAttr.readSelect.parent,
      elementAttr.readSelect.element,
      elementAttr.readSelect.attribute
    );
    Util.CreateElement(
      elementAttr.haveReadOption.parent,
      elementAttr.haveReadOption.element,
      elementAttr.haveReadOption.attribute,
      elementAttr.haveReadOption.text
    );
    Util.CreateElement(
      elementAttr.notReadOption.parent,
      elementAttr.notReadOption.element,
      elementAttr.notReadOption.attribute,
      elementAttr.notReadOption.text
    );
  }
}
