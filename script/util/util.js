function setMultipleAttr(element, obj) {
  for (let key in obj) {
    element.setAttribute(key, obj[key]);
  }
}

function getElementValue(element) {
  const getElement = document.querySelector(element);
  return getElement.value;
}

function removeList(libraryArr) {
  for (let i = 0; i < libraryArr.length; i++) {
    let elementList = document.querySelector(`[id='${i}']`);
    elementList.remove();
  }
}
export { setMultipleAttr, getElementValue, removeList };
