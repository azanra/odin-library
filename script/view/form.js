import { AuthorInput } from "./author.js";
import { elementAttr } from "./elementAttr.js";
import { PageInput } from "./page.js";
import { ReadStatusInput } from "./read.js";
import { TitleInput } from "./title.js";
import { Util } from "../util/util.js";

export class FormInput {
  constructor() {
    Util.CreateElement(
      elementAttr.modal.parent,
      elementAttr.modal.element,
      elementAttr.modal.attribute
    );
    Util.CreateElement(
      elementAttr.form.parent,
      elementAttr.form.element,
      elementAttr.form.attribute
    );
    const titleInput = new TitleInput();
    const authorInput = new AuthorInput();
    const pageInput = new PageInput();
    const readStatusInput = new ReadStatusInput();
    Util.CreateElement(
      elementAttr.submitBtn.parent,
      elementAttr.submitBtn.element,
      elementAttr.submitBtn.attribute,
      elementAttr.submitBtn.text
    );
    Util.CreateElement(
      elementAttr.cancelBtn.parent,
      elementAttr.cancelBtn.element,
      elementAttr.cancelBtn.attribute,
      elementAttr.cancelBtn.text
    );
  }
}
