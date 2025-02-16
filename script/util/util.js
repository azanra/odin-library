function setMultipleAttr(element, obj) {
  for (let key in obj) {
    element.setAttribute(key, obj[key]);
  }
}

function getElementValue(element) {
  const getElement = document.querySelector(element);
  return getElement.value;
}

export { setMultipleAttr, getElementValue };
