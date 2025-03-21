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
	const [offset, setOffset] = useState<number>(12);

	useEffect(() => {
		const fetchManyPokemon = async () => {
			console.log({
				limit: 12,
				offset: offset,
			});

			const manyMorePokemon = await getManyPokemon({
				limit: 12,
				offset: offset,
			});

			setPokemon(manyMorePokemon.results);
		};

		fetchManyPokemon();
	}, [offset]);

	return (
		<>
			<div className="pt-10 mb-32 grid lg:mb-3 lg:grid-cols-4 lg:text-center">
				{pokemon.map((pokemon) => (
					<PokemonCard
						name={pokemon.name}
						key={pokemon.name}
						url={pokemon.url}
						img={pokemon.img}
					/>
				))}
			</div>
			<Button type="submit" onClick={() => setOffset(offset + 12)}>
				Back
			</Button>
			<Button type="submit" onClick={() => setOffset(offset - 12)}>
				Next
			</Button>
		</>
	);
}
