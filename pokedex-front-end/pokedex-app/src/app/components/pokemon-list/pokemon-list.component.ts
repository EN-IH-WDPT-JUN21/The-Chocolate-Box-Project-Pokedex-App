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


  constructor(private pokemonService: PokemonService) { 
    this.pokemonList = [];
  }

  loadPokemonList() {
    this.pokemonService.getPokemonListDTO().subscribe(
      result => {
        this.pokemonList = result.results;
        console.log(this.pokemonList.length);
      }
      )
      
      
    }
    
    ngOnInit() {
      this.loadPokemonList();    
    }


}
