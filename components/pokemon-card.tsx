"use client";
import Image from "next/image";
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
			className="rounded-lg border border-transparent m-3 px-20 py-20 transition-colors dark:border-gray-500 hover:border-gray-300 hover:dark:bg-neutral-800/30"
		>
			<h2 className={"text text-center font-semibold"}>{name}</h2>
			<ImageWithFallback
				src={img}
				fallbackSrc="/not-found.svg"
				alt={name}
				height="100"
				width="100"
				style={{ alignSelf: "center" }}
				className="center"
			/>
		</Link>
	);
}
