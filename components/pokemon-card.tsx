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
			className="rounded-lg border border-transparent m-3 px-10 py-10 transition-colors dark:border-gray-500 hover:border-gray-300 hover:dark:bg-neutral-800/30"
		>
			<h2 className={"text-2xl text-center font-semibold"}>{name}</h2>
			<ImageWithFallback
				src={img}
				fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
				alt={name}
				height="150"
				width="150"
				style={{ alignSelf: "center" }}
				placeholder="blur"
				blurDataURL="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
				className="center"
			/>
		</Link>
	);
}
