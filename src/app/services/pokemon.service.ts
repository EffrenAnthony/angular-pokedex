import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly API = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(limit: number = 10, offset: number = 0): Observable<any> {
    return this.http.get(`${this.API}?limit=${limit}&offset=${offset}`);
  }

  getPokemonDeailt(name: string): Observable<Object>{
    return this.http.get(`${this.API}/${name}`)
  }
}
