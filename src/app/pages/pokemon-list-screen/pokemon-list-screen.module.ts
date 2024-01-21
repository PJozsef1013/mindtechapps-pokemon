import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PokemonListScreenComponent } from './pokemon-list-screen.component';
import { PokemonListScreenRoutingModule } from './pokemon-list-screen-routing.module';
import { PokemonFilterComponent } from './components';

@NgModule({
  declarations: [PokemonListScreenComponent, PokemonFilterComponent],
  imports: [CommonModule, PokemonListScreenRoutingModule, ReactiveFormsModule],
  exports: [PokemonListScreenComponent],
})
export class PokemonListScreenModule {}
