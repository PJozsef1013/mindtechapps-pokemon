import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailsScreenComponent } from './pokemon-details-screen.component';
import { PokemonDetailsScreenRoutingModule } from './pokemon-details-screen-routing.module';
import { PokemonDetailsComponent } from './components';
import { LoadingModule } from '../../shared';

@NgModule({
  declarations: [PokemonDetailsScreenComponent, PokemonDetailsComponent],
  imports: [CommonModule, PokemonDetailsScreenRoutingModule, LoadingModule],
  exports: [PokemonDetailsScreenComponent],
})
export class PokemonDetailsScreenModule {}
