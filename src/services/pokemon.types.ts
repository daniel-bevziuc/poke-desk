export interface PokemonList {
  name: string;
  url: string;
}

export interface PokemonResults {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonList[]
}