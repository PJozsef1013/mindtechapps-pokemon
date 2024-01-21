import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PokemonState, pokemonFeatureKey } from './pokemon.reducer';

const selectFeature = createFeatureSelector<PokemonState>(pokemonFeatureKey);

const selectIsLoading$ = createSelector(
  selectFeature,
  ({ isLoading }) => isLoading
);

const selectPokemons$ = createSelector(
  selectFeature,
  ({ pokemons }) => pokemons
);

const selectPokemonsWithDetails$ = createSelector(
  selectFeature,
  ({ pokemonsWithDetails }) => pokemonsWithDetails
);

const selectPokemonFIlters$ = createSelector(
  selectFeature,
  ({ filters }) => filters
);

const selectPokemon$ = createSelector(selectFeature, ({ pokemon }) => pokemon);

export const fromPokemon = {
  selectIsLoading$,
  selectPokemons$,
  selectPokemonsWithDetails$,
  selectPokemonFIlters$,
  selectPokemon$,
};
