export async function getSomePokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
  const data = await response.json();
  console.log(data.results);
  return data.results;
}
