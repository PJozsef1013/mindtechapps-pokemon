import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-details-screen',
  templateUrl: './pokemon-details-screen.component.html',
  styleUrl: './pokemon-details-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailsScreenComponent {}
