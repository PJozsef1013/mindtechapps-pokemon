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
export const setFilters = createAction(
  `${actionPrefix} Set filters`,
  props<{ filters: PokemonFilterOutputValues }>()
);

export const clearPokemons = createAction(`${actionPrefix} Clear pokemons`);
export const clearFilters = createAction(`${actionPrefix} Clear filters`);
