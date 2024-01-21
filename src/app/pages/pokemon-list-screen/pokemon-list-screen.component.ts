import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PokemonStatus, PokemonType } from '../../shared';

@Component({
  selector: 'app-pokemon-list-screen',
  templateUrl: './pokemon-list-screen.component.html',
  styleUrl: './pokemon-list-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListScreenComponent {
  mockPokemons = [
    {
      id: '1',
      name: 'Bulbasaur',
      type: PokemonType.Bug,
      status: PokemonStatus.Free,
    },
    {
      id: '1',
      name: 'Bulbasaur',
      type: PokemonType.Bug,
      status: PokemonStatus.Caught,
    },
  ];
}
