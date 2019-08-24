async function test(){
    const pokeApi = `https://pokeapi.co/api/v2/`;
    const result = await fetch(`https://pokeapi.co/api/v2/generation/1`);
    const data = await result.json();
    // console.log(data);
    const starter = data.pokemon_species[0].name;
    console.log(starter);

};

test();