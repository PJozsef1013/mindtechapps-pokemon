import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListScreenComponent } from './pokemon-list-screen.component';
import { PokemonListScreenRoutingModule } from './pokemon-list-screen-routing.module';

@NgModule({
  declarations: [PokemonListScreenComponent],
  imports: [CommonModule, PokemonListScreenRoutingModule],
  exports: [PokemonListScreenComponent],
})
export class PokemonListScreenModule {}
