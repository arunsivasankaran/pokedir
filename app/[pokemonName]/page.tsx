import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getPokemon } from "@/lib/api";

export default async function PokemonPage({
	params,
}: { params: { pokemonName: string } }) {
	const pokemonName = (await params).pokemonName;
	const pokemonDetails = await getPokemon(pokemonName);

	return (
		<>
			<h1 className="text=4xl text-bold pt-4">{pokemonName}</h1>
			<div
				className="m-4"
				style={{ width: "400px", height: "400px", position: "relative" }}
			>
				<PokemonImage
					image={
						pokemonDetails.sprites.other?.["official-artwork"]?.front_default ||
						"https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
					}
					name={pokemonName}
				/>
			</div>
			<h3 className="flex-col">
				<Table>
					<TableCaption>Stats</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[300px]">Stat</TableHead>
							<TableHead className="text-right">Value</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{pokemonDetails.stats.map((stat) => (
							<TableRow key={stat.stat.name}>
								<TableCell className="font-medium">{stat.stat.name}</TableCell>
								<TableCell className="text-right">{stat.base_stat}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</h3>
		</>
	);
}
