async function GetNewJokes() {
  const API_URL =
    "https://official-joke-api.appspot.com/jokes/random";

  const respones = await fetch(API_URL);

  const data = await respones.json();

  document.getElementById("setup").innerText = "" || data.setup;
  document.getElementById("punchline").innerText = data.punchline || "";
}
