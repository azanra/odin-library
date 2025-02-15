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
  pageContainer: {
    parent: ".form-input",
    element: "div",
    attribute: {
      class: "page-container",
    },
  },
  pageLabel: {
    parent: ".page-container",
    element: "label",
    attribute: {
      class: "page-label",
      for: "page-input",
    },
    text: "Page : ",
  },
  pageInput: {
    parent: ".page-container",
    element: "input",
    attribute: {
      type: "text",
      id: "page-input",
      placeholder: "page amount",
    },
  },
  readContainer: {
    parent: ".form-input",
    element: "div",
    attribute: {
      class: "read-container",
    },
  },
  readLabel: {
    parent: ".read-container",
    element: "label",
    attribute: {
      class: "read-label",
      for: "read-select",
    },
    text: "Have read : ",
  },
  readSelect: {
    parent: ".read-container",
    element: "select",
    attribute: {
      name: "HaveRead",
      id: "read-select",
    },
  },
  haveReadOption: {
    parent: "#read-select",
    element: "option",
    attribute: {
      value: "read",
    },
    text: "Yes",
  },
  notReadOption: {
    parent: "#read-select",
    element: "option",
    attribute: {
      value: "not yet",
    },
    text: "Not yet",
  },
};

export { elementAttr };
