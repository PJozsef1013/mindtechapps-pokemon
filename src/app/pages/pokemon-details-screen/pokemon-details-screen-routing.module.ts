import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonDetailsScreenComponent } from './pokemon-details-screen.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonDetailsScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonDetailsScreenRoutingModule {}
