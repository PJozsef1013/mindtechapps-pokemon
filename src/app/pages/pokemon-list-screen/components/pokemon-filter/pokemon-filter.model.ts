import { PokemonType } from '../../../../shared';

export interface PokemonFilterOutputValues {
  search: string | null;
  pokemonType: PokemonType | string;
  isOnlyCaughtShown: boolean;
}
