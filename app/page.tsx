import { PokemonCard } from "@/components/pokemon-card";
import { PokemonGrid } from "@/components/pokemon-grid";
import { getManyPokemon } from "@/lib/api";
import Image from "next/image";

export default async function Home() {
	const manyPokemon = await getManyPokemon();

	return <PokemonGrid manyPokemon={manyPokemon} />;
}
