const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const generateJoker = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
};

jokeBtn.addEventListener("click", generateJoker);

generateJoker();

// async function generateJoker_2() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   const res = await fetch("https://icanhazdadjoke.com", config);

//   const data = await res.json();

//   jokeEl.innerHTML = data.joke;
// }
