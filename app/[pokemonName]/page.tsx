import { getPokemon } from "@/lib/api";
import Image from "next/image";

export default async function PokemonPage({
	params,
}: { params: { pokemonName: string } }) {
	const pokemonName = params.pokemonName;
	const pokemonDetails = await getPokemon(params.pokemonName);

	console.log(pokemonDetails);

	return (
		<div>
			<h1 className="text=4xl text-bold pt-4">{pokemonName}</h1>
			<Image
				src={pokemonDetails.sprites.front_default}
				alt={pokemonName}
				width={200}
				height={200}
			/>
		</div>
	);
}
