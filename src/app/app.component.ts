import { Component, OnInit } from '@angular/core';
import { getCaughtPokemonsIds, setCaughtPokemonsIds } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'mindtechapps-pokemon';

  ngOnInit(): void {
    this.initCaughtPokemonsIds();
  }

  private initCaughtPokemonsIds(): void {
    const caughtPokemonsIds = getCaughtPokemonsIds();

    if (!caughtPokemonsIds) {
      setCaughtPokemonsIds([]);
    }
  }
}
