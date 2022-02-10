fetch("http://localhost:3000/memes")
  .then((response) => response.json())
  .then((memes) => {
    console.log(memes);
    renderMemes(memes);
  })
  .catch((error) => {
    console.error("We got an error: ", error);
  });

const renderMemes = (memes) => {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  memes.forEach((meme) => {
    const card = createMemeCard(meme, memes);
    container.append(card);
  });
};

const handleDeleteMeme = (id, memes) => {
  fetch(`http://localhost:3000/memes/${id}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then(() => {
      const newMemes = memes.filter((meme) => meme.id !== id);
      renderMemes(newMemes);
    })
    .catch((error) => console.error(error));
};

const createMemeCard = (meme, memes) => {
  const card = document.createElement("div");
  const title = document.createElement("h3");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const subtitle = document.createElement("p");
  const deleteButton = document.createElement("div");

  title.innerText = meme.title;
  image.src = meme.src;
  image.alt = meme.title;
  subtitle.innerText = meme.subtitle;
  deleteButton.innerText = "Delete";

  card.setAttribute("class", "card");
  imageContainer.setAttribute("class", "image");
  deleteButton.setAttribute("class", "delete");

  deleteButton.addEventListener("click", () =>
    handleDeleteMeme(meme.id, memes)
  );

  imageContainer.append(image);

  card.append(title, imageContainer, subtitle, deleteButton);

  return card;
};
