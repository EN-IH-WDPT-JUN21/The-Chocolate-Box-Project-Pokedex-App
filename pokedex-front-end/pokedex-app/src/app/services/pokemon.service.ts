import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  readonly pokemonListURL: string = "https://pokeapi.co/api/v2/pokemon"

  constructor(
    private http: HttpClient
  ) { }

  
getPokemonListDTO(url = this.pokemonListURL): Observable<any> {
  return this.http.get<any>(url);
}

getPokemonDTO(url: string): Observable<any> {
  return this.http.get<any>(url);
}

getPokemonDTObyName(pokemonName:string): Observable<any> {
  return this.http.get<any>(this.pokemonListURL + "/" + pokemonName)
}






}
