"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { PokemonCard } from "./pokemon-card";

export function PokemonGrid() {
	const [searchText, setSearchText] = useState("");

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
				<PokemonCard name="Pikachu"/>
				<PokemonCard name="Bulbasaur"/>
				<PokemonCard name="Pikachu"/>
				<PokemonCard name="Pikachu"/>
			</div>
		</>
	);
}
