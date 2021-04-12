async function getData() {
  try {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
