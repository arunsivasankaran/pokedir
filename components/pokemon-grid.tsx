"use client";
import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { PokemonCard } from "./pokemon-card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { getManyPokemon, type ManyPokemonResponse } from "@/lib/api";
// import { parseAsInteger, useQueryState } from "nuqs";
import { useSearchParams } from "next/navigation";
interface PokemonGridProps {
	manyPokemon: { name: string; url: string; img: string }[];
}

export function PokemonGrid({ manyPokemon }: PokemonGridProps) {
	const [pokemon, setPokemon] =
		useState<{ name: string; url: string; img: string }[]>(manyPokemon);
	const [offset, setOffset] = useState<number>(24);


	useEffect(() => {
		const fetchManyPokemon = async () => {

			console.log({
				limit: 8,
				offset: offset,
			});

			const manyMorePokemon = await getManyPokemon({
				limit: 8,
				offset: offset,
			});

			setPokemon(manyMorePokemon.results);
		};

		fetchManyPokemon();
	}, [offset]);

	return (
		<>
			<div>
				<h1 className="text-4xl py-6 text-center pb-10">Find your Pokemon</h1>
			</div>
			<div className="pt-10 mb-32 grid text-center lg:mb-0 m-3 lg:grid-cols-8 lg:text-left">
				{pokemon.map((pokemon) => (
					<PokemonCard
						name={pokemon.name}
						key={pokemon.name}
						url={pokemon.url}
						img={pokemon.img}
					/>
				))}
			</div>
        <Button type="submit" onClick={() => setOffset(offset + 24)}>
					Back
				</Button>
				<Button type="submit" onClick={() => setOffset(offset - 24)}>
					Next
				</Button>
		</>
	);
}
