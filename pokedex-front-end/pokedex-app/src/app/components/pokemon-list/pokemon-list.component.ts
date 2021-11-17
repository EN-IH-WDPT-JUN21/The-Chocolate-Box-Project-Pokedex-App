import { Pokemon, PokemonDTO } from 'src/app/models/pokemon-model';
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
pokemonListDTOResult!: PokemonListDTOResult;
pokemonDTO: PokemonDTO;
pokemon: Pokemon;
ability1Description: string = '';
ability2Description: string = '';

page: number = 1;




  constructor(private pokemonService: PokemonService) {
    this.pokemonList = [];

    this.pokemonDTO = {
      id: 0,
      name: '',
      abilities: [
          {
              ability: {
                  name: '',
                  url: ''  // URL of the ability, needed to get the detail
              }
          },
          {
              ability: {
                  name: '',
                  url: ''  // URL of the ability, needed to get the detail
              }
          }
      ],
      sprites: {
          front_default: '',
          other: {
              dream_world: {
                  front_default: ''
              }
          }
      },
      stats: [  // ArrayLength = 6
          {
              base_stat: 0,
              stat: {
                  name: '' //hp
              }
          },
          {
              base_stat: 0,
              stat: {
                  name: '' //attack
              }
          },
          {
              base_stat: 0,
              stat: {
                  name: '' //defense
              }
          },
          {
              base_stat: 0,
              stat: {
                  name: '' //special-attack
              }
          },
          {
              base_stat: 0,
              stat: {
                  name: '' //special-defense
              }
          },
          {
              base_stat: 0,
              stat: {
                  name: '' //speed
              }
          },
      ],
      types: [
          {
              type: {
                  name: 'string'
              }
          }
      ]
  }

  this.pokemon = {
    id: 0,
    name: '',
    type: '',
    spriteUrl: '',
    imageUrl: '',
    hp: 0,
    attack: 0,
    defence: 0,
    specialAttack: 0,
    specialDefence: 0,
    speed: 0,
    abilityName1: '',
    abilityDetail1: '',
    abilityName2: '',
    abilityDetail2: ''
}
   
  

  }

  // loadPokemonList(url?: string) {
  //   let getRequest = (typeof url != 'undefined') ? this.pokemonService.getPokemonListDTO(url) : this.pokemonService.getPokemonListDTO();
  //   getRequest.subscribe(
  //     result => {
  //       this.pokemonList = result.results;
        
  //     }
  //   )    
  // }

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

  showDetail(item: PokemonListDTOResult): void {
    this.pokemonListDTOResult = item;
    console.log(this.pokemonListDTOResult.name);
    this.getPokemonDTO();
    this.getAbility1Description();
    this.getAbility2Description();
    this.createPokemon();
    console.log(this.pokemon.name +" from showDetail in List after button click")

  }

  getPokemonDTO(): void {
    this.pokemonService.getPokemonDTObyURL(this.pokemonListDTOResult.url).subscribe(result => {
      this.pokemonDTO = result;
    })
    console.log("this pokemonDTO is " + this.pokemonDTO.name)
  }

  getAbility1Description(): void {
    this.pokemonService.getAbilityByURL(this.pokemonDTO.abilities[0].ability.url).subscribe(result => {
      this.ability1Description = result.effect_entries[1].effect
    })
  }

  getAbility2Description(): void {
    this.pokemonService.getAbilityByURL(this.pokemonDTO.abilities[1].ability.url).subscribe(result => {
      this.ability1Description = result.effect_entries[1].effect
    })
  }

  createPokemon(): void {
    this.pokemon.id = this.pokemonDTO.id;
    this.pokemon.name = this.pokemonDTO.name;
    this.pokemon.type = this.pokemonDTO.types[0].type.name;
    this.pokemon.imageUrl = this.pokemonDTO.sprites.other.dream_world.front_default;
    this.pokemon.hp = this.pokemonDTO.stats[0].base_stat;
    this.pokemon.attack = this.pokemonDTO.stats[1].base_stat;
    this.pokemon.defence = this.pokemonDTO.stats[2].base_stat;
    this.pokemon.specialAttack = this.pokemonDTO.stats[3].base_stat;
    this.pokemon.specialDefence = this.pokemonDTO.stats[4].base_stat;
    this.pokemon.speed = this.pokemonDTO.stats[5].base_stat;
    this.pokemon.abilityName1 = this.pokemonDTO.abilities[0].ability.name;
    this.pokemon.abilityDetail1 = this.ability1Description;
    this.pokemon.abilityName2 = this.pokemonDTO.abilities[1].ability.name;
    this.pokemon.abilityDetail2 = this.ability2Description;
  }

}
