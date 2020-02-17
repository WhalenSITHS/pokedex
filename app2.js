const DOMStrings = {
  displayName: document.querySelector(".pkmn-name-size"),
  displayImageFront: document.querySelector(".display-image-front-def"),
  displayImageBack: document.querySelector(".display-image-back-def"),
  displayImageShinyFront: document.querySelector(".display-image-shiny-front"),
  displayImageShinyBack: document.querySelector(".display-image-shiny-back"),
  displayNum: document.querySelector(".pkmn-num"),
  type: document.querySelector(".type"),
  input: document.getElementById("pkmn-form"),
  wrapper: document.querySelector(".wrapper"),
  stats: document.querySelectorAll(".stats"),
  statsGallery: document.querySelector(".stats-gallery"),
  stats1: document.querySelector(".stats-1"),
  stats2: document.querySelector(".stats-2"),
  abilities: document.querySelector(".abilities")
};
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5"
};

DOMStrings.input.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".nes-btn").click();
  }
});

function init() {
  document
    .getElementById("pkmn-form")
    .addEventListener("submit", async function(e) {
      e.preventDefault();
      DOMStrings.displayName.innerText = "test";

      const pkmnName = document
        .querySelector("#pokemon-name")
        .value.toLowerCase();
      try {
        const result = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pkmnName}`
        );
        const data = await result.json();
        const displayPkm = function(data) {
          DOMStrings.displayName.innerText = data.name;
          DOMStrings.displayNum.innerText = data.id;
          DOMStrings.displayImageFront.src = data.sprites.front_default;
          DOMStrings.displayImageBack.src = data.sprites.back_default;
          DOMStrings.displayImageShinyBack.src = data.sprites.back_shiny;
          DOMStrings.displayImageShinyFront.src = data.sprites.front_shiny;
          DOMStrings.type.textContent = data.types.map(data => data.type.name);
          DOMStrings.abilities.textContent = data.abilities.map(
            data => data.ability.name
          );
          //DOMStrings.stats1.textContent;
          //DOMStrings.stats1.textContent = data.stats.map(el => el.stat.name);
          //DOMStrings.stats2.textContent = data.stats.map(el => el.base_stat);
          //data.stats.forEach(el => console.log(el.stat.name));
          //data.stats.forEach(el => console.log(el.base_stat));
          //data.stats.forEach(el => console.log(el));

          const color = colors[data.types[0].type.name];
          console.log(color);
          //console.log(data.types.type.name);
          DOMStrings.wrapper.style.backgroundColor = color;
        };
        displayPkm(data);
        document.querySelector("#pokemon-name").value = "";
      } catch (err) {
        console.log(err);
        DOMStrings.type.textContent = "Pokemon not found please try again";
      }
    });
}
init();
