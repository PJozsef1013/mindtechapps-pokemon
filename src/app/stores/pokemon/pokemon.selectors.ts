import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PokemonState, pokemonFeatureKey } from './pokemon.reducer';

const selectFeature = createFeatureSelector<PokemonState>(pokemonFeatureKey);

const selectIsLoading$ = createSelector(
  selectFeature,
  ({ isLoading }) => isLoading
);

export const fromPokemon = {
  selectIsLoading$,
};
