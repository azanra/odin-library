import { CreateElement } from "./createElement.js";
import { elementAttr } from "./elementAttr.js";

function Page() {
  CreateElement(
    elementAttr.pageContainer.parent,
    elementAttr.pageContainer.element,
    elementAttr.pageContainer.attribute
  );
  CreateElement(
    elementAttr.pageLabel.parent,
    elementAttr.pageLabel.element,
    elementAttr.pageLabel.attribute,
    elementAttr.pageLabel.text
  );
  CreateElement(
    elementAttr.pageInput.parent,
    elementAttr.pageInput.element,
    elementAttr.pageInput.attribute
  );
}

export { Page };
