import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ApiService, PokemonStatus } from '../../shared';
import * as pokemonActions from './pokemon.actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class PokemonEffects {
  public readonly getPokemons$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(pokemonActions.getPokemons),
      switchMap(() =>
        this.apiService.getPokemons().pipe(
          map((response) => {
            return pokemonActions.getPokemonsSuccess({
              pokemons: response.results,
            });
          }),
          catchError(() =>
            of(
              pokemonActions.getPokemonsFail({
                errorMsg: 'An error occured!',
              })
            )
          )
        )
      )
    );
  });

  //TODO handle error
  // public getPokemonsFail$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(pokemonActions.getPokemonsFail),
  //     map((errorMsg) => )
  //   );
  // });

  public readonly getPokemonByUrl$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(pokemonActions.getPokemonByUrl),
      mergeMap(({ url }) =>
        this.apiService.getPokemonByUrl(url).pipe(
          map((response) => {
            return pokemonActions.getPokemonByUrlSuccess({
              pokemon: {
                id: response.id,
                name: response.name,
                status: PokemonStatus.Free,
                type: response.types[0].type.name,
              },
            });
          }),
          catchError(() =>
            of(
              pokemonActions.getPokemonByUrlFail({
                errorMsg: 'An error occured!',
              })
            )
          )
        )
      )
    );
  });

  //TODO handle error
  // public getPokemonByUrlFail$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(pokemonActions.getPokemonByUrlFail),
  //     map((errorMsg) => )
  //   );
  // });

  constructor(
    private readonly actions$: Actions,
    private readonly apiService: ApiService
  ) {}
}
