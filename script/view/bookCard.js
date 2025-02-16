function bookCard(libraryArr) {
  for (let i = 0; i < libraryArr.length; i++) {
    const container = document.querySelector(".container");
    let bookContainer = document.createElement("div");
    bookContainer.setAttribute("id", i);
    container.append(bookContainer);
    let bookPara = document.createElement("p");
    bookPara.textContent = libraryArr[i].info();
    bookContainer.append(bookPara);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("id", "delete-btn");
    bookContainer.append(deleteBtn);
    toggleReadBtn(libraryArr[i], bookContainer);
  }
}

function toggleReadBtn(libraryArr, parentEle) {
  if (libraryArr.haveRead !== "finished") {
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Have Read";
    updateBtn.setAttribute("id", "read-btn");
    parentEle.append(updateBtn);
  }
}

export { bookCard };
