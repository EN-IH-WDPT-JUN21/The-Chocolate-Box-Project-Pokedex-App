import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  readonly pokemonListURL: string = "https://pokeapi.co/api/v2/pokemon?limit=1118"

  constructor(
    private http: HttpClient
  ) { }

  
getPokemonListDTO(): Observable<any> {
  return this.http.get<any>(this.pokemonListURL);
}

getPokemonDTO(url: string): Observable<any> {
  return this.http.get<any>(url);
}








}
