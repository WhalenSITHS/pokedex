const DOMStrings = {
  displayName: document.querySelector(".pkmn-name-size"),
  displayImageFront: document.querySelector(".display-image-front-def"),
  displayImageBack: document.querySelector(".display-image-back-def"),
  displayImageShinyFront: document.querySelector(".display-image-shiny-front"),
  displayImageShinyBack: document.querySelector(".display-image-shiny-back"),
  displayNum: document.querySelector(".pkmn-num"),
  type: document.querySelector(".type"),
  input: document.getElementById("pkmn-form"),
};

DOMStrings.input.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".nes-btn").click();
  }
});


function init() {
  document.getElementById("pkmn-form").addEventListener("submit", async function(e) {
      e.preventDefault();
      DOMStrings.displayName.innerText = 'test';

      const pkmnName = document.querySelector("#pokemon-name").value.toLowerCase();
      try{
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
        };
        displayPkm(data);
        document.querySelector("#pokemon-name").value = "";
      }catch(err){
        console.log(err);
        DOMStrings.type.textContent = 'Pokemon not found please try again'

      }

    });
}
init();
