const pkmn = "alakazam";
function getPkmn() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`)
    .then((result) => {
      //console.log(result);
      return result.json();
    })
    .then((data) => {
      console.log(data);
    });
}
getPkmn();
