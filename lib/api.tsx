import type { PokemonDetail } from "./types";

export interface ManyPokemonResponse {
  results: {
    name: string;
    url: string;
    img: string;
  }[];
  count: number;
  next: string;
  previous: string;

}

export async function getManyPokemon(input: {
  limit: number;
  offset: number;
}): Promise<ManyPokemonResponse> {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${input.limit}&offset=${input.offset}`,
	);
	const data = await response.json();

	const results = data.results.map((pokemon: {
    name: string;
    url: string;
  }) => {
		const id = pokemon.url
			.split("https://pokeapi.co/api/v2/pokemon/")[1]
			.split("/")[0];
		const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
		return { ...pokemon, img };
	});


	return { results, count: data.count, next: data.next, previous: data.previous };
}

export async function getPokemon(name: string): Promise<PokemonDetail> {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	const data = await response.json();
	return data;
}
