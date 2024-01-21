export interface PokemonResponse {
  id: string;
  name: string;
  types: any[];
  weight: number;
  height: number;
  abilities: any[];
  [k: string]: any;
}
