import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ApiService, PokemonStatus } from '../../shared';
import * as pokemonActions from './pokemon.actions';
import { catchError, delay, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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

  public readonly getPokemon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(pokemonActions.getPokemon),
      switchMap(({ id }) =>
        this.apiService.getPokemon(id).pipe(
          map((response) => {
            return pokemonActions.getPokemonSuccess({
              pokemon: {
                id: response.id,
                name: response.name,
                status: PokemonStatus.Free,
                type: response.types[0].type.name,
                weight: response.weight,
                height: response.height,
                abilities: response.abilities.map(
                  (ability) => ability.ability.name
                ),
              },
            });
          }),
          catchError(() =>
            of(
              pokemonActions.getPokemonFail({
                errorMsg: 'An error occured!',
              })
            )
          )
        )
      )
    );
  });

  public showErrorToast$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          pokemonActions.getPokemonsFail,
          pokemonActions.getPokemonByUrlFail,
          pokemonActions.getPokemonFail
        ),
        tap((error) => this.showErrorMessage(error.errorMsg))
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly apiService: ApiService,
    private readonly toastr: ToastrService
  ) {}

  showErrorMessage(errorMsg: string): void {
    this.toastr.error(errorMsg);
  }
}
