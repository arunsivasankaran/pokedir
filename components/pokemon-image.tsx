"use client";

import Image from "next/image";
import ImageWithFallback from "./image-fallback";

export function PokemonImage({ image, name }: { image: string; name: string }) {
	return (
		<ImageWithFallback
			src={image}
			fallbackSrc="/not-found.svg"
			alt={name}
			priority
			fill
			style={{ objectFit: "contain" }}
			className="transition-opacity duration-500 group-hover:opacity-100"
		/>
	);
}
