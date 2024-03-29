import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PokemonListScreenComponent } from './pokemon-list-screen.component';
import { PokemonListScreenRoutingModule } from './pokemon-list-screen-routing.module';
import { PokemonFilterComponent, PokemonListComponent } from './components';
import { LoadingModule } from '../../shared';

@NgModule({
  declarations: [
    PokemonListScreenComponent,
    PokemonFilterComponent,
    PokemonListComponent,
  ],
  imports: [
    CommonModule,
    PokemonListScreenRoutingModule,
    ReactiveFormsModule,
    LoadingModule,
  ],
  exports: [PokemonListScreenComponent],
})
export class PokemonListScreenModule {}
