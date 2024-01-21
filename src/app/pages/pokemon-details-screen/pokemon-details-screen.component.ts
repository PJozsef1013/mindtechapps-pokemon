import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PokemonStatus, PokemonType } from '../../shared';

@Component({
  selector: 'app-pokemon-details-screen',
  templateUrl: './pokemon-details-screen.component.html',
  styleUrl: './pokemon-details-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailsScreenComponent {
  mockPokemon = {
    id: '2',
    name: 'Bulbasaur',
    type: PokemonType.Bug,
    status: PokemonStatus.Free,
    weight: 200,
    height: 180,
    abilities: ['speed', 'power', 'fire'],
  };
}
