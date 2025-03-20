"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { PokemonCard } from "./pokemon-card";

interface PokemonGridProps {
	manyPokemon: { name: string; url: string }[];
}

export function PokemonGrid({ manyPokemon }: PokemonGridProps) {
	const [searchText, setSearchText] = useState("");

	console.log(manyPokemon);

	const filter = (list: { name: string; url: string }[], text: string) => {
		return list.filter((pokemon) =>
			pokemon.name.toLowerCase().includes(text.toLowerCase()),
		);
	};

	const filteredPokemon = filter(manyPokemon, searchText);

	return (
		<>
			<div>
				<h3 className="text-2xl py-6 text-center">Find your Pokemon</h3>
				<div className="grid w-full max-width-sm items-center gap-1.5">
					<Label htmlFor="pokemonName">Pokemon Name</Label>
					<input
						id="pokemonName"
						type="text"
						value={searchText}
						placeholder="pikachu"
						onChange={(e) => setSearchText(e.target.value)}
					/>
				</div>
				<h3 className="text=3x; pt-12 pb-6 text-center">Results</h3>
			</div>
			<div className="mb-32 grid text-center lg:mb-0 m-3 lg:grid-cols-4 lg:text-left">
				{filteredPokemon.map((pokemon) => (
					<PokemonCard name={pokemon.name} key={pokemon.name} />
				))}
			</div>
		</>
	);
}
