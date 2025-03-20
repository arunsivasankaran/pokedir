"use client";

import Image from "next/image";

export function PokemonImage({ image, name }: { image: string; name: string }) {
	return (
		<Image
			src={image}
			alt={name}
			priority
			fill
			style={{ objectFit: "contain" }}
			className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
			onLoadingComplete={(image) => image.classList.remove("opacity-0")}
		/>
	);
}
