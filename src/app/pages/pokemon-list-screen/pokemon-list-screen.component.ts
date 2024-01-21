import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, filter, map } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { PokemonFilterOutputValues } from './components';
import { Pokemon, PokemonStatus } from '../../shared';
import {
  clearFilters,
  clearPokemons,
  fromPokemon,
  getPokemonByUrl,
  getPokemons,
  setFilters,
  setPokemonStatus,
} from '../../stores';

@UntilDestroy()
@Component({
  selector: 'app-pokemon-list-screen',
  templateUrl: './pokemon-list-screen.component.html',
  styleUrl: './pokemon-list-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListScreenComponent {
  isLoading$ = this.store.select(fromPokemon.selectIsLoading$);
  pokemons$ = this.store.select(fromPokemon.selectPokemons$);

  pokemonsWithDetails$ = combineLatest([
    this.store.select(fromPokemon.selectPokemonsWithDetails$),
    this.store.select(fromPokemon.selectPokemonFIlters$),
  ]).pipe(
    map(([pokemonsWithDetails, filters]) => {
      if (
        !filters ||
        (!filters.search && !filters.pokemonType && !filters.isOnlyCaughtShown)
      ) {
        return pokemonsWithDetails;
      }

      return this.filterPokemonsWithDetails(filters, pokemonsWithDetails);
    })
  );

  constructor(private readonly store: Store, private readonly router: Router) {}

  ngOnInit(): void {
    this.getPokemons();
    this.getPokemonDetailsForList();
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearPokemons());
    this.store.dispatch(clearFilters());
  }

  onFilterChange(filterValues: PokemonFilterOutputValues): void {
    this.store.dispatch(setFilters({ filters: filterValues }));
  }

  onRowClick(pokemonId: string): void {
    this.router.navigate(['pokemons', pokemonId]);
  }

  onActionClick(pokemonId: string): void {
    this.store.dispatch(setPokemonStatus({ id: pokemonId }));
  }

  private getPokemons(): void {
    this.store.dispatch(getPokemons());
  }

  private getPokemonDetailsForList(): void {
    this.pokemons$
      .pipe(
        filter((pokemons) => !!pokemons),
        untilDestroyed(this)
      )
      .subscribe((pokemons) => {
        if (!pokemons) {
          return;
        }

        for (let pokemon of pokemons) {
          this.getPokemonByUrl(pokemon.url);
        }
      });
  }

  private getPokemonByUrl(url: string): void {
    this.store.dispatch(getPokemonByUrl({ url }));
  }

  private filterPokemonsWithDetails(
    filters: PokemonFilterOutputValues,
    pokemonsWithDetails?: Pokemon[]
  ): Pokemon[] | undefined {
    return pokemonsWithDetails?.filter(
      (pokemon) =>
        (filters.search ? pokemon.name.includes(filters.search) : true) &&
        (filters.isOnlyCaughtShown
          ? pokemon.status === PokemonStatus.Caught
          : true) &&
        (filters.pokemonType
          ? pokemon.type === filters.pokemonType?.toLowerCase()
          : true)
    );
  }
}
