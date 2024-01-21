import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Pokemon, PokemonStatus } from '../../../../shared';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] | null | undefined;

  @Output() rowClick = new EventEmitter<string>();
  @Output() actionClick = new EventEmitter<string>();

  readonly PokemonStatus = PokemonStatus;

  onRowClick(pokemonId: string): void {
    this.rowClick.emit(pokemonId);
  }

  onActionClick(pokemonId: string): void {
    this.actionClick.emit(pokemonId);
  }
}
