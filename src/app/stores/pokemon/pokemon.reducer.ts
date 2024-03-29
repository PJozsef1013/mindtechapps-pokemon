import { createReducer, on } from '@ngrx/store';

import * as pokemonActions from './pokemon.actions';
import {
  Pokemon,
  PokemonStatus,
  PokemonWithUrl,
  getCaughtPokemonsIds,
  parseCaughtPokemonsIds,
  updateCaughtPokemonsIds,
} from '../../shared';
import { PokemonFilterOutputValues } from '../../pages/pokemon-list-screen/components';

export const pokemonFeatureKey = 'pokemon';

export interface PokemonState {
  isLoading: boolean;
  pokemons?: PokemonWithUrl[];
  pokemonsWithDetails?: Pokemon[];
  pokemon?: Pokemon;
  filters?: PokemonFilterOutputValues;
}

const initialState: PokemonState = {
  isLoading: false,
  pokemons: undefined,
  pokemonsWithDetails: undefined,
  pokemon: undefined,
  filters: undefined,
};

export const pokemonReducer = createReducer(
  initialState,
  on(
    pokemonActions.getPokemons,
    pokemonActions.getPokemon,
    pokemonActions.getPokemonByUrl,
    (state): PokemonState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    pokemonActions.getPokemonsSuccess,
    (state, { pokemons }): PokemonState => ({
      ...state,
      isLoading: false,
      pokemons,
    })
  ),
  on(
    pokemonActions.getPokemonSuccess,
    (state, { pokemon }): PokemonState => ({
      ...state,
      isLoading: false,
      pokemon,
    })
  ),

  on(
    pokemonActions.getPokemonByUrlSuccess,
    (state, { pokemon }): PokemonState => ({
      ...state,
      isLoading: false,
      pokemonsWithDetails: updatePokemonsWithDetails(
        pokemon,
        state.pokemonsWithDetails
      ),
    })
  ),
  on(
    pokemonActions.setPokemonStatus,
    (state, { id }): PokemonState => ({
      ...state,
      pokemonsWithDetails: updatePokemonStatusInPokemonsWithDetails(
        id,
        state.pokemonsWithDetails
      ),
    })
  ),
  on(
    pokemonActions.setPokemonStatusOnDetailsScreen,
    (state): PokemonState => ({
      ...state,
      pokemon: updatePokemonStatusInPokemon(state.pokemon),
    })
  ),
  on(
    pokemonActions.setPokemonStatusOnDetailsScreenAfterReload,
    (state): PokemonState => ({
      ...state,
      pokemon: updatePokemonStatusOnDetailsScreenAfterReload(state.pokemon),
    })
  ),
  on(
    pokemonActions.setFilters,
    (state, { filters }): PokemonState => ({
      ...state,
      filters,
    })
  ),
  on(
    pokemonActions.getPokemonsFail,
    pokemonActions.getPokemonFail,
    pokemonActions.getPokemonByUrlFail,
    (state): PokemonState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    pokemonActions.clearPokemons,
    (state): PokemonState => ({
      ...state,
      pokemons: undefined,
      pokemonsWithDetails: undefined,
    })
  ),
  on(
    pokemonActions.clearPokemon,
    (state): PokemonState => ({
      ...state,
      pokemon: undefined,
    })
  ),
  on(
    pokemonActions.clearFilters,
    (state): PokemonState => ({
      ...state,
      filters: undefined,
    })
  )
);

const updatePokemonsWithDetails = (
  pokemon: Pokemon,
  pokemonsWithDetails?: Pokemon[]
): Pokemon[] | undefined => {
  const caughtPokemonsIds = getCaughtPokemonsIds();

  if (!pokemonsWithDetails) {
    if (!caughtPokemonsIds) {
      return;
    }

    return parseCaughtPokemonsIds(caughtPokemonsIds).includes(pokemon.id)
      ? [{ ...pokemon, status: PokemonStatus.Caught }]
      : [pokemon];
  }

  const copiedPokemonsWithDetails = [...pokemonsWithDetails];
  copiedPokemonsWithDetails.push(pokemon);

  if (!caughtPokemonsIds) {
    return;
  }

  const index = copiedPokemonsWithDetails.findIndex(
    ({ id }) => id === pokemon.id
  );

  if (parseCaughtPokemonsIds(caughtPokemonsIds).includes(pokemon.id)) {
    copiedPokemonsWithDetails.splice(index, 1, {
      ...pokemon,
      status: PokemonStatus.Caught,
    });
  }

  return copiedPokemonsWithDetails;
};

const updatePokemonStatusInPokemonsWithDetails = (
  id: string,
  pokemonsWithDetails?: Pokemon[]
): Pokemon[] | undefined => {
  if (!pokemonsWithDetails) {
    return;
  }

  const updatedPokemonsWithDetails = pokemonsWithDetails.map((pokemon) => ({
    ...pokemon,
    status:
      pokemon.id === id
        ? pokemon.status === PokemonStatus.Free
          ? PokemonStatus.Caught
          : PokemonStatus.Free
        : pokemon.status,
  }));

  updateCaughtPokemonsIds(id);

  return updatedPokemonsWithDetails;
};

const updatePokemonStatusInPokemon = (
  pokemon?: Pokemon
): Pokemon | undefined => {
  if (!pokemon) {
    return;
  }

  const updatedPokemon = {
    ...pokemon,
    status:
      pokemon.status === PokemonStatus.Free
        ? PokemonStatus.Caught
        : PokemonStatus.Free,
  };

  updateCaughtPokemonsIds(pokemon.id);

  return updatedPokemon;
};

const updatePokemonStatusOnDetailsScreenAfterReload = (
  pokemon?: Pokemon
): Pokemon | undefined => {
  if (!pokemon) {
    return;
  }

  const caughtPokemonsIds = getCaughtPokemonsIds();

  if (!caughtPokemonsIds) {
    return;
  }

  const updatedPokemon = {
    ...pokemon,
    status: parseCaughtPokemonsIds(caughtPokemonsIds).includes(pokemon.id)
      ? PokemonStatus.Caught
      : pokemon.status,
  };

  return updatedPokemon;
};
