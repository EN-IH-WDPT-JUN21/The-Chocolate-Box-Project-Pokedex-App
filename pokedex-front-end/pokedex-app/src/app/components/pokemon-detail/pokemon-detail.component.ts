import { PokemonListDTOResult } from './../../models/pokemon-model';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from './../../services/pokemon.service';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Pokemon, PokemonDTO } from 'src/app/models/pokemon-model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit, OnChanges {

  @Input() pokemonListDTOResult!: PokemonListDTOResult;
  pokemonDTO!: PokemonDTO 
  @Input() pokemon!:Pokemon;
  result:any;

  constructor(private pokemonService:PokemonService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { 
      
    }

    ngOnInit(): void{
    }

    ngOnChanges() {
      console.log(this.pokemon.name + "from the detail component on changes" );
    }

    
}
