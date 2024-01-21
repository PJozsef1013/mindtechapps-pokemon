import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailsScreenComponent } from './pokemon-details-screen.component';
import { PokemonDetailsScreenRoutingModule } from './pokemon-details-screen-routing.module';

@NgModule({
  declarations: [PokemonDetailsScreenComponent],
  imports: [CommonModule, PokemonDetailsScreenRoutingModule],
  exports: [PokemonDetailsScreenComponent],
})
export class PokemonDetailsScreenModule {}
