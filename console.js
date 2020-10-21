const pkmn = "alakazam";
/* function getPkmn() {
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
 */
async function getPkmn() {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`);
  //console.log(result);
  const data = await result.json();
  console.log(data);
}
getPkmn();
