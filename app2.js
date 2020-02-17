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
  abilities: document.querySelector(".abilities"),
  statsNodeList: document.querySelectorAll(".stats-arr")
};
const statsArr = Array.from(DOMStrings.statsNodeList);
const colors = {
  fire: "#FD7D24",
  grass: "#9BCC50",
  electric: "#EED535",
  water: "#4592C4",
  ground: "#A38C21",
  rock: "#A38C21",
  fairy: "#FDB9E9",
  poison: "#B97FC9",
  ghost: "#B97FC9",
  bug: "#729F3F",
  dragon: "#7766EE",
  psychic: "#F366B9",
  flying: "#BDB9B8",
  fighting: "#D56723",
  normal: "#F5F5F5",
  ice: "#51C4E7",
  steel: "#AAAABB",
  dark: "#775544"
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
          //refactored
          for (i = 0; i < statsArr.length; i++) {
            statsArr[i].textContent = data.stats[i].base_stat;
          }
          console.log(data);
          /*  statsArr[0].textContent = data.stats[0].base_stat;
          statsArr[1].textContent = data.stats[1].base_stat;
          statsArr[2].textContent = data.stats[2].base_stat;
          statsArr[3].textContent = data.stats[3].base_stat;
          statsArr[4].textContent = data.stats[4].base_stat;
          statsArr[5].textContent = data.stats[5].base_stat; */

          const color = colors[data.types[0].type.name];
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
