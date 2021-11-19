import { PokemonDTO } from './../models/pokemon-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  readonly pokemonListURL: string = "https://pokeapi.co/api/v2/pokemon?limit=904"

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

    getPokemonDTObyId(pokemonId: number): Observable<any> {
    return this.http.get<any>(this.pokemonListURL + "/" + pokemonId)
    // let data = await this.httpClient.get<any>(this.url).toPromise();

  }

  getPokemonDTObyURL(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

getAllPokemonNames(): Observable<any> {
  return this.http.get<any>("https://pokeapi.co/api/v2/pokemon?limit=904")
}

getIdFromPokemonName(pokemonName: string):number {
  let pokemonId:number = 0;
  this.getPokemonDTObyName(pokemonName).subscribe(result => { 
    pokemonId = result.id;
  console.log(pokemonId)}
    )
    return pokemonId;
}

getAbilityByURL(url: string): Observable<any> {
  return this.http.get<any>(url);
}

}
