const memes = fetch("http://localhost:3000/memes").then((response) =>
  response.json()
);

export default await memes;
