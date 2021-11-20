import { PokemonListDTOResult } from './../../models/pokemon-model';
import { PokemonService } from './../../services/pokemon.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {

  name: string;
  pokemonURL: string;
  @Input() pokemonItem!: PokemonListDTOResult;
  spriteURL: string;
  pokemonDTO: string;

  constructor(
    private pokemonService: PokemonService) {
    this.spriteURL = "";
    this.pokemonURL = "";
    this.pokemonDTO = "";
    this.name = "";
   }

  ngOnInit(): void {
    this.name = this.pokemonItem.name.toUpperCase()
    this.getPokemonURL();
    this.getSpriteURL();
    
  }

  getPokemonURL() {
    this.pokemonURL = this.pokemonItem.url;
  }

  getSpriteURL() {
    this.pokemonService.getPokemonDTO(this.pokemonURL).subscribe(
      result => {
        this.spriteURL = result.sprites.front_default;
      }
    )
  }

  



}
