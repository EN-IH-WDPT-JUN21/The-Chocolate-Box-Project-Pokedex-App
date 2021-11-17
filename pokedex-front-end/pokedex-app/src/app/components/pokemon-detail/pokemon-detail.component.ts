import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonDTO } from 'src/app/models/pokemon-model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  
  pokemonDTO!: PokemonDTO;
  pokemon!:Pokemon;
  result:any;

  constructor(private pokemonService:PokemonService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const pokemonName:string = this.activatedRoute.snapshot.params['pokemonName'];
    this.showPokemon(pokemonName);
  }

  showPokemon(pokemonName:string){
    this.pokemonService.getPokemonDTObyName(pokemonName).subscribe(result => {
      this.pokemonDTO = result;
      this.pokemon = {
        id: this.pokemonDTO.id,
        name: this.pokemonDTO.name,
        type: this.pokemonDTO.types[0].type.name,
        spriteUrl: this.pokemonDTO.sprites.front_default,
        imageUrl: this.pokemonDTO.sprites.front_default,
        hp: this.pokemonDTO.stats[0].base_stat,
        attack: this.pokemonDTO.stats[1].base_stat,
        defence: this.pokemonDTO.stats[2].base_stat,
        specialAttack: this.pokemonDTO.stats[3].base_stat,
        specialDefence: this.pokemonDTO.stats[4].base_stat,
        speed: this.pokemonDTO.stats[5].base_stat,
        abilityName1: this.pokemonDTO.abilities[0].ability.name,
        abilityDetail1: this.pokemonDTO.abilities[0].ability.name,
        abilityName2: this.pokemonDTO.abilities[1].ability.name,
        abilityDetail2: this.pokemonDTO.abilities[1].ability.name,
      }
    })
  }


}
