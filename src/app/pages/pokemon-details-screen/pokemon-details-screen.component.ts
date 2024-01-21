import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, delay, filter, map, switchMap, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Pokemon, PokemonStatus, PokemonType } from '../../shared';
import {
  clearPokemon,
  fromPokemon,
  getPokemon,
  setPokemonStatusOnDetailsScreen,
  setPokemonStatusOnDetailsScreenAfterReload,
} from '../../stores';

@Component({
  selector: 'app-pokemon-details-screen',
  templateUrl: './pokemon-details-screen.component.html',
  styleUrl: './pokemon-details-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailsScreenComponent {
  isLoading$ = this.store.select(fromPokemon.selectIsLoading$);
  pokemon$: Observable<Pokemon | undefined> | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearPokemon());
  }

  onBackToSearchClick(): void {
    this.router.navigate(['pokemons']);
  }

  onActionClick(pokemonId: string): void {
    this.store.dispatch(setPokemonStatusOnDetailsScreen({ id: pokemonId }));
  }

  private getPokemon(): void {
    this.pokemon$ = this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      filter((id): id is string => !!id),
      tap((id: string) => {
        this.store.dispatch(getPokemon({ id }));
      }),
      delay(200),
      switchMap((id: string) => {
        this.store.dispatch(setPokemonStatusOnDetailsScreenAfterReload({ id }));

        return this.store.select(fromPokemon.selectPokemon$);
      })
    );
  }
}
