export interface PokemonDetail {
	id: number;
	name: string;
	species: Species;
	sprites: Sprites;
	stats: Stat[];
	types: Type[];
}

export interface Species {
	name: string;
	url: string;
}

export interface Sprites {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
	other: Other;
}

export interface Other {
	dream_world: DreamWorld;
	home: Home;
	"official-artwork": OfficialArtwork;
	showdown: Showdown;
}

export interface DreamWorld {
	front_default: string;
}

export interface Home {
	front_default: string;
	front_shiny: string;
}

export interface OfficialArtwork {
	front_default: string;
	front_shiny: string;
}

export interface Showdown {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
}

export interface Stat {
	base_stat: number;
	effort: number;
	stat: Stat2;
}

export interface Stat2 {
	name: string;
	url: string;
}

export interface Type {
	slot: number;
	type: Type2;
}

export interface Type2 {
	name: string;
	url: string;
}
