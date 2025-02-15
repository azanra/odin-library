function bookCard(libraryArr) {
  for (let i = 0; i < libraryArr.length; i++) {
    const container = document.querySelector(".container");
    let bookContainer = document.createElement("div");
    bookContainer.setAttribute("id", i);
    container.append(bookContainer);
    let bookPara = document.createElement("p");
    bookPara.textContent = libraryArr[i].info();
    bookContainer.append(bookPara);
  }
}

export { bookCard };
