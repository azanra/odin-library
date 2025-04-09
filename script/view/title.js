import { Util } from "../util/util.js";
import { elementAttr } from "./elementAttr.js";

export class TitleInput {
  constructor() {
    Util.CreateElement(
      elementAttr.titleContainer.parent,
      elementAttr.titleContainer.element,
      elementAttr.titleContainer.attribute
    );
    Util.CreateElement(
      elementAttr.titleLabel.parent,
      elementAttr.titleLabel.element,
      elementAttr.titleLabel.attribute,
      elementAttr.titleLabel.text
    );
    Util.CreateElement(
      elementAttr.titleInput.parent,
      elementAttr.titleInput.element,
      elementAttr.titleInput.attribute
    );
  }
}
