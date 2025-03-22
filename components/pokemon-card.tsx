"use client";
import Link from "next/link";
import ImageWithFallback from "./image-fallback";

interface PokemonCardProps {
	name: string;
	url: string;
	img: string;
}

export function PokemonCard({ name, img }: PokemonCardProps) {
	return (
		<Link
			href={name}
			key={`${name}Card`}
			className="w-80 h-80 rounded-lg border border-transparent m-3 px-20 py-20 transition-colors dark:border-gray-500 hover:border-gray-300 hover:dark:bg-neutral-800/30"
		>
			<h2 className={"text-sm text-center font-semibold text-nowrap"}>
				{name}
			</h2>
			<div className="pt-10 flex justify-center">
				<ImageWithFallback
					src={img}
					fallbackSrc="/not-found.svg"
					alt={name}
					height="100"
					width="100"
					style={{ alignSelf: "center" }}
				/>
			</div>
		</Link>
	);
}
