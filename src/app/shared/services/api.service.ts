import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { PokemonResponse, PokemonsResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokemonsResponse> {
    return this.http.get<PokemonsResponse>(`${environment.apiBaseUrl}pokemon`);
  }

  getPokemonByUrl(url: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${url}`);
  }

  getPokemon(id: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(
      `${environment.apiBaseUrl}pokemon/${id}`
    );
  }
}
