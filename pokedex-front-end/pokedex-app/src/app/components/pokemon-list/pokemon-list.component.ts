import { PokemonListDTO, PokemonListDTOResult } from './../../models/pokemon-model';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList: PokemonListDTOResult[];
  previousBatchURL: string;
  nextBatchURL: string;


  constructor(private pokemonService: PokemonService) {
    this.pokemonList = [];
    this.previousBatchURL = '';
    this.nextBatchURL = '';
  }

  loadPokemonList(url?: string) {
    let getRequest = (typeof url != 'undefined') ? this.pokemonService.getPokemonListDTO(url) : this.pokemonService.getPokemonListDTO();

    getRequest.subscribe(
      result => {
        this.pokemonList = result.results;
        this.previousBatchURL = result.previous;
        this.nextBatchURL = result.next;
      }
    )
  }

  ngOnInit() {
    this.loadPokemonList();
  }


}
