import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemons',
    pathMatch: 'full',
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./pages/pokemon-list-screen/pokemon-list-screen.module').then(
        (m) => m.PokemonListScreenModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'pokemons/:id',
    loadChildren: () =>
      import(
        './pages/pokemon-details-screen/pokemon-details-screen.module'
      ).then((m) => m.PokemonDetailsScreenModule),
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
