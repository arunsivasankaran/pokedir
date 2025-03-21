"use client";

import Image from "next/image";
import ImageWithFallback from "./image-fallback";

export function PokemonImage({ image, name }: { image: string; name: string }) {
	return (
		<ImageWithFallback
			src={image}
			fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
			alt={name}
			priority
			fill
			style={{ objectFit: "contain" }}
			className="transition-opacity duration-500 group-hover:opacity-100"
			// onLoadingComplete={(image) => image.classList.remove("opacity-0")}
		/>
	);
}
