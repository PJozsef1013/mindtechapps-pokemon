import { createReducer } from '@ngrx/store';

export const pokemonFeatureKey = 'pokemon';

export interface PokemonState {
  isLoading: boolean;
}

const initialState: PokemonState = {
  isLoading: false,
};

export const pokemonReducer = createReducer(initialState);
