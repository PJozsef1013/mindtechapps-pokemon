import { PokemonWithUrl } from './pokemon-with-url.interface';

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonWithUrl[];
}
