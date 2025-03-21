import { PokemonGrid } from "@/components/pokemon-grid";
import { getManyPokemon } from "@/lib/api";

export default async function Home() {
	const manyPokemon = await getManyPokemon({
		limit: 12,
		offset: 0,
	});

	return <PokemonGrid manyPokemon={manyPokemon.results} />;
}
