interface PokemonResponse {
	name: string;
	url: string;
}

export async function getManyPokemon(): Promise<PokemonResponse[]> {
	const response = await fetch(
		"https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
	);
	const data = await response.json();
	console.log(data.results);
	return data.results;
}

export async function getPokemon(name: string) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	const data = await response.json();
	return data;
}
