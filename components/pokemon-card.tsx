"use client";
import Image from "next/image";
import Link from "next/link";

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
			className="rounded-lg border border-transparent m-3 px-10 py-10 transition-colors dark:border-gray-500 hover:border-gray-300 hover:dark:bg-neutral-800/30"
		>
			<h2 className={"text-2xl text-center font-semibold"}>{name}</h2>
			<Image
				src={img}
				alt={name}
				height="150"
				width="150"
				style={{ alignSelf: "center" }}
				className="center"
			/>
		</Link>
	);
}
