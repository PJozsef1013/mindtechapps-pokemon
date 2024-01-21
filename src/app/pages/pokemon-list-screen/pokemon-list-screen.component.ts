import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-screen',
  templateUrl: './pokemon-list-screen.component.html',
  styleUrl: './pokemon-list-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListScreenComponent {}