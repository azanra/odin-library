import { CreateElement } from "./createElement.js";
import { elementAttr } from "./elementAttr.js";
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
}

export { Form };
