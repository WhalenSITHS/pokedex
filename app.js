const displayName = document.querySelector('.display-name');
const displayImage = document.querySelector('.display-image');
let pokeName = prompt('Please name a pokemon');


async function test(pokeName){
    const pokeApi = `https://pokeapi.co/api/v2/`;
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    const data = await result.json();
    //return data;
   return data;
   
    
    

};

let pokeTest = test(pokeName).then(data => {
    displayName.textContent = data.name;
    displayImage.src = data.sprites.front_default;
});
