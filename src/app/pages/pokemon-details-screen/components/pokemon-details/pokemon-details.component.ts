import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Pokemon, PokemonStatus } from '../../../../shared';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailsComponent {
  @Input() pokemon: Pokemon | null | undefined;

  @Output() backToSearchClick = new EventEmitter<void>();
  @Output() actionClick = new EventEmitter<string>();

  readonly PokemonStatus = PokemonStatus;

  onBackToSearchClick(): void {
    this.backToSearchClick.emit();
  }

  onActionClick(pokemonId: string): void {
    this.actionClick.emit(pokemonId);
  }
}
