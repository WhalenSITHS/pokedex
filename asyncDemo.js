async function getData() {
  try {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/pikkachu`);
    //console.log(result);
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
