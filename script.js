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

  memes.forEach((meme) => {
    const card = createMemeCard(meme);
    container.append(card);
  });
};

const createMemeCard = (meme) => {
  const card = document.createElement("div");
  const title = document.createElement("h3");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const subtitle = document.createElement("p");

  title.innerText = meme.title;
  image.src = meme.src;
  image.alt = meme.title;
  subtitle.innerText = meme.subtitle;

  card.setAttribute("class", "card");
  imageContainer.setAttribute("class", "image");

  imageContainer.append(image);

  card.append(title, imageContainer, subtitle);

  return card;
};
