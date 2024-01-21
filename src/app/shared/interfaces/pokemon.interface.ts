import { PokemonStatus, PokemonType } from '../enums';

export interface Pokemon {
  id: string;
  name: string;
  type: PokemonType;
  status: PokemonStatus;
  weight?: number;
  height?: number;
  abilities?: string[];
}
