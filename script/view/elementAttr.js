const elementAttr = {
  modal: {
    parent: ".container ",
    element: "dialog",
    attribute: {
      class: "form-dialog",
    },
  },
  form: {
    parent: ".form-dialog",
    element: "form",
    attribute: {
      class: "form-input",
    },
  },
  titleContainer: {
    parent: ".form-input",
    element: "div",
    attribute: {
      class: "title-container",
    },
  },
  titleLabel: {
    parent: ".title-container",
    element: "label",
    attribute: {
      for: "title-input",
      class: "title-label",
    },
    text: "Title : ",
  },
  titleInput: {
    parent: ".title-container",
    element: "input",
    attribute: {
      type: "text",
      id: "title-input",
      placeholder: "title",
    },
  },
};

export { elementAttr };
