import { PokemonListDTO, PokemonListDTOResult } from './../../models/pokemon-model';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

pokemonList: PokemonListDTOResult[];
page: number = 1;




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

  handlePageChange(event: number): void {
    this.page = event;
  }

}
