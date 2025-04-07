import { AuthorInput } from "./author.js";
import { CreateElement } from "./createElement.js";
import { elementAttr } from "./elementAttr.js";
import { IdInput } from "./id.js";
import { PageInput } from "./page.js";
import { ReadStatusInput } from "./read.js";
import { TitleInput } from "./title.js";

export class FormInput {
  constructor() {
    CreateElement(
      elementAttr.modal.parent,
      elementAttr.modal.element,
      elementAttr.modal.attribute
    );
    CreateElement(
      elementAttr.form.parent,
      elementAttr.form.element,
      elementAttr.form.attribute
    );
    const idInput = new IdInput();
    const titleInput = new TitleInput();
    const authorInput = new AuthorInput();
    const pageInput = new PageInput();
    const readStatusInput = new ReadStatusInput();
    CreateElement(
      elementAttr.submitBtn.parent,
      elementAttr.submitBtn.element,
      elementAttr.submitBtn.attribute,
      elementAttr.submitBtn.text
    );
    CreateElement(
      elementAttr.cancelBtn.parent,
      elementAttr.cancelBtn.element,
      elementAttr.cancelBtn.attribute,
      elementAttr.cancelBtn.text
    );
  }
}
