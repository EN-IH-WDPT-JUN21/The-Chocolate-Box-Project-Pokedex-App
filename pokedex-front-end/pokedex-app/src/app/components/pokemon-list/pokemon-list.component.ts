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

label: string = "Search for pokemon"
validPokemon: boolean = true;  

pokemonList: PokemonListDTOResult[];
pokemonListDTOResult!: PokemonListDTOResult;
pokemonDTO: PokemonDTO = {
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
          },
          home: {
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
};
pokemon: Pokemon = {
  id: 0,
  name: 'NAME',
  type: '',
  spriteUrl: '../../../assets/pokeball.png',
  imageUrl: '../../../assets/pokeball.png',
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
};
ability1Description: string = '';
ability2Description: string = '';

page: number = 1;




  constructor(private pokemonService: PokemonService) {
    this.pokemonList = [];

  }


  
  ngOnInit() {
    this.loadPokemonList();
    
  }

  loadPokemonList() {
    this.pokemonService.getPokemonListDTO().subscribe(
      result => {
        this.pokemonList = result.results;
        console.log(this.pokemonList.length);
      }
    )    
  }

  handlePageChange(event: number): void {
    this.page = event;
  }

    async showDetail(item: PokemonListDTOResult) {
    this.pokemonListDTOResult = item;
    console.log(this.pokemonListDTOResult.name);

    await this.getPokemonDTO();
    await this.getAbility1Description();
    await this.getAbility2Description();
    this.createPokemon();
    console.log(this.pokemon.name +" from showDetail in List after button click")
  }


  async getPokemonDTO() {
    console.log(this.pokemonListDTOResult.url)
    this.pokemonDTO = await this.pokemonService.getPokemonDTObyURL(this.pokemonListDTOResult.url).toPromise();
    console.log("this pokemonDTO is " + this.pokemonDTO.name)
    console.log("and abilities length: " + this.pokemonDTO.abilities.length)
  }



  async getAbility1Description() {
    console.log("The URL for ability 1 is " + this.pokemonDTO.abilities[0].ability.url)
    const result = await this.pokemonService.getAbilityByURL(this.pokemonDTO.abilities[0].ability.url).toPromise();
    this.ability1Description = result.flavor_text_entries[0].flavor_text;
    console.log(this.ability1Description)
    
  }



  async getAbility2Description() {
    // console.log(this.pokemonDTO.abilities[1].ability.url)
    if (this.pokemonDTO.abilities.length > 1) {
    console.log("The URL for ability 2 is " + this.pokemonDTO.abilities[1].ability.url)
    const result = await this.pokemonService.getAbilityByURL(this.pokemonDTO.abilities[1].ability.url).toPromise();
    
    this.ability2Description = result.flavor_text_entries[0].flavor_text;
    } else {
      this.ability2Description = "No Second Ability"
    }
    
    console.log(this.ability2Description)
    
  }


  createPokemon(): void {
    this.pokemon.id = this.pokemonDTO.id;
    this.pokemon.name = this.pokemonDTO.name;
    this.pokemon.type = this.pokemonDTO.types[0].type.name;
    this.pokemon.imageUrl = this.pokemonDTO.sprites.other.home.front_default;
    this.pokemon.hp = this.pokemonDTO.stats[0].base_stat;
    this.pokemon.attack = this.pokemonDTO.stats[1].base_stat;
    this.pokemon.defence = this.pokemonDTO.stats[2].base_stat;
    this.pokemon.specialAttack = this.pokemonDTO.stats[3].base_stat;
    this.pokemon.specialDefence = this.pokemonDTO.stats[4].base_stat;
    this.pokemon.speed = this.pokemonDTO.stats[5].base_stat;
    this.pokemon.abilityName1 = this.pokemonDTO.abilities[0].ability.name;
    this.pokemon.abilityDetail1 = this.ability1Description;
    if (this.pokemonDTO.abilities.length > 1) {
    this.pokemon.abilityName2 = this.pokemonDTO.abilities[1].ability.name;
    } else { this.pokemon.abilityName2 = "No Second Ability"}
    this.pokemon.abilityDetail2 = this.ability2Description;
  }

  async onSearch(pokemonName: any): Promise<any>  {
    this.pokemonService.getPokemonDTObyName(pokemonName).subscribe( result => {
      this.pokemonDTO = result;
      this.validPokemon = true;
    },
    (error) => {
      console.error('Error Found When Searching')
      this.validPokemon = false;
    })
  }

  async search(pokemonName:any){
    if(this.validPokemon){
      this.createPokemon();
    }
  }

}
