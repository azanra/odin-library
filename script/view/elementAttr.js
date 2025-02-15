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
  authorContainer: {
    parent: ".form-input",
    element: "div",
    attribute: {
      class: "author-container",
    },
  },
  authorLabel: {
    parent: ".author-container",
    element: "label",
    attribute: {
      class: "author-label",
      for: "author-input",
    },
    text: "Author : ",
  },
  authorInput: {
    parent: ".author-container",
    element: "input",
    attribute: {
      type: "text",
      id: "author-input",
      placeholder: "author",
    },
  },
};

export { elementAttr };
