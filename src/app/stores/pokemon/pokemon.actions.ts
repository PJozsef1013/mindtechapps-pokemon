import { createAction, props } from '@ngrx/store';

import { Pokemon, PokemonWithUrl } from '../../shared';
import { PokemonFilterOutputValues } from '../../pages/pokemon-list-screen/components';

const actionPrefix = '[POKEMON]';

export const getPokemons = createAction(`${actionPrefix} Get pokemons`);
export const getPokemonsSuccess = createAction(
  `${actionPrefix} Get pokemons success`,
  props<{ pokemons: PokemonWithUrl[] }>()
);
export const getPokemonsFail = createAction(
  `${actionPrefix} Get pokemons fail`,
  props<{ errorMsg: string }>()
);

export const getPokemon = createAction(
  `${actionPrefix} Get pokemon`,
  props<{ id: string }>()
);
export const getPokemonSuccess = createAction(
  `${actionPrefix} Get pokemon success`,
  props<{ pokemon: Pokemon }>()
);
export const getPokemonFail = createAction(
  `${actionPrefix} Get pokemon fail`,
  props<{ errorMsg: string }>()
);

export const getPokemonByUrl = createAction(
  `${actionPrefix} Get pokemon by url`,
  props<{ url: string }>()
);
export const getPokemonByUrlSuccess = createAction(
  `${actionPrefix} Get pokemon by url success`,
  props<{ pokemon: Pokemon }>()
);
export const getPokemonByUrlFail = createAction(
  `${actionPrefix} Get pokemon by url fail`,
  props<{ errorMsg: string }>()
);

export const setPokemonStatus = createAction(
  `${actionPrefix} Ser pokemon status`,
  props<{ id: string }>()
);
export const setPokemonStatusOnDetailsScreen = createAction(
  `${actionPrefix} Set pokemon status on details screen`,
  props<{ id: string }>()
);
export const setPokemonStatusOnDetailsScreenAfterReload = createAction(
  `${actionPrefix} Set pokemon status on details screen after navigation or reload`,
  props<{ id: string }>()
);
export const setFilters = createAction(
  `${actionPrefix} Set filters`,
  props<{ filters: PokemonFilterOutputValues }>()
);

export const clearPokemons = createAction(`${actionPrefix} Clear pokemons`);
export const clearPokemon = createAction(`${actionPrefix} Clear pokemon`);
export const clearFilters = createAction(`${actionPrefix} Clear filters`);
