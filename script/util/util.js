function setMultipleAttr(element, obj) {
  for (let key in obj) {
    element.setAttribute(key, obj[key]);
  }
}

export { setMultipleAttr };
