import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment.development';
import { PokemonEffects, pokemonReducer } from './stores';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ pokemon: pokemonReducer }),
    EffectsModule.forRoot([PokemonEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
