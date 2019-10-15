const displayName = document.querySelector('.pkmn-name-size');
const displayImageFront = document.querySelector('.display-image-front-def');
const displayImageBack = document.querySelector('.display-image-back-def');
const displayImageShinyFront = document.querySelector('.display-image-shiny-front');
const displayImageShinyBack = document.querySelector('.display-image-shiny-back');
const displayNum = document.querySelector('.pkmn-num');
const type = document.querySelector('.type');
const input = document.getElementById('pkmn-form');

input.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(".nes-btn").click();
      }
    });

function init() {
    document.getElementById('pkmn-form').addEventListener('submit', function(e){
        e.preventDefault();
        const pkmnName = document.querySelector('#pokemon-name').value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnName}`)
        .then(result => {
            return result.json();
        })
        .then(data => {
            displayName.innerText = data.name;
            displayNum.innerText = data.id;
            displayImageFront.src = data.sprites.front_default;
            displayImageBack.src = data.sprites.back_default;
            displayImageShinyBack.src = data.sprites.back_shiny;
            displayImageShinyFront.src = data.sprites.front_shiny;
            //type.textContent = `Type: ${data.types[0].type.name}`;
            type.textContent = data.types.map(data => data.type.name);
            console.log(data);
            
        })
        document.querySelector('#pokemon-name').value = '';
    });
    
}
init(); 


/* async function test(pkmnName){
    const pokeApi = `https://pokeapi.co/api/v2/`;
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnName}`);
    const data = await result.json();
    // return data;
      console.log(data);
   
    
    

};
 */

/* let pokeTest = test(pokeName).then(data => {
    displayName.textContent = data.name;
    displayImage.src = data.sprites.front_default;
});
 */