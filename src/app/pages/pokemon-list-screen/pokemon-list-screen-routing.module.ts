import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListScreenComponent } from './pokemon-list-screen.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonListScreenRoutingModule {}
