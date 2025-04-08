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
  idContainer: {
    parent: ".form-input",
    element: "div",
    attribute: {
      class: "id-container",
    },
  },
  idLabel: {
    parent: ".id-container",
    element: "label",
    attribute: {
      for: "id-input",
      class: "id-label",
    },
    textContent: "Id : ",
  },
  idInput: {
    parent: ".id-container",
    element: "input",
    attribute: {
      type: "number",
      id: "id-input",
      name: "id",
      placeholder: "Id",
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
      type: "number",
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
      value: "finished",
    },
    text: "Finished",
  },
  notReadOption: {
    parent: "#read-select",
    element: "option",
    attribute: {
      value: "not yet",
    },
    text: "Not yet",
  },
  submitBtn: {
    parent: ".form-input",
    element: "button",
    attribute: {
      type: "button",
      id: "submit-btn",
    },
    text: "Submit",
  },
  cancelBtn: {
    parent: ".form-input",
    element: "button",
    attribute: {
      type: "button",
      id: "cancel-btn",
    },
    text: "Cancel",
  },
  bookContainer: {
    parent: ".container",
    element: "div",
    attr: {
      id: "",
    },
  },
  bookPara: {
    element: "p",
    attr: {
      class: "bookPara",
    },
  },
  deleteBtn: {
    element: "button",
    attribute: {
      id: "delete-btn",
    },
    text: "Delete",
  },
  readBtn: {
    element: "button",
    attribute: {
      id: "read-btn",
    },
  },
};

export { elementAttr };
