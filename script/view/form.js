import { Author } from "./author.js";
import { CreateElement } from "./createElement.js";
import { elementAttr } from "./elementAttr.js";
import { Page } from "./page.js";
import { Read } from "./read.js";
import { Title } from "./title.js";

function Form() {
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
  Title();
  Author();
  Page();
  Read();
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

export { Form };
