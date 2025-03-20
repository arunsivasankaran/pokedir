import { PokemonCard } from "@/components/pokemon-card";
import { PokemonGrid } from "@/components/pokemon-grid";
import { getSomePokemons } from "@/lib/api";
import Image from "next/image";

export default async function Home() {

    const pokemon = await getSomePokemons();

	return <PokemonGrid manyPokemon={pokemon}/>;
}
