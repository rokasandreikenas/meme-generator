const form = document.querySelector("form");

const handleSubmitForm = (event) => {
  event.preventDefault();
  const title = document.querySelector("input[name=title]");
  const subtitle = document.querySelector("input[name=subtitle]");
  const src = document.querySelector("input[name=src]");

  const meme = {
    title: title.value,
    subtitle: subtitle.value,
    src: src.value,
  };

  fetch("http://localhost:3000/memes", {
    method: "POST",
    body: JSON.stringify(meme),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
};

form.addEventListener("submit", handleSubmitForm);
