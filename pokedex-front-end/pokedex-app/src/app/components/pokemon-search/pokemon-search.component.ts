import { Form, FormControl, FormGroup } from '@angular/forms';
import { PokemonService } from './../../services/pokemon.service';
import { PokemonDTO, PokemonListDTOResult } from './../../models/pokemon-model';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  pokemonList:PokemonListDTOResult[];
  pokemonSearch: FormGroup;
  pokemonName: FormControl;

  @Input()
  label!: string;
  
  filteredOptions!: Observable<PokemonListDTOResult[]>;

  @Output() pokemonNameOutput: EventEmitter<string> = new EventEmitter();
  @Output() addPokemonOutput: EventEmitter<string> = new EventEmitter();

  constructor(private pokemonService:PokemonService) {
    this.pokemonList = []
    this.pokemonName = new FormControl('');
    this.pokemonSearch = new FormGroup({
      pokemonName: this.pokemonName
    }
    );
   }

  ngOnInit(): void {
    this.loadPokemonList();
    this.filteredOptions = this.pokemonSearch.valueChanges.pipe(
      startWith(''),
      map(value => this._filter()),
    );
  }

    loadPokemonList() {
    this.pokemonService.getAllPokemonNames().subscribe( result => {
      this.pokemonList = result.results
      console.log(result)})
      console.log(this.pokemonList)
    }

    sendName():void {
      this.pokemonNameOutput.emit(this.pokemonName.value)
    }

    addPokemon(): void {
      this.addPokemonOutput.emit(this.pokemonName.value)
    }

  private _filter(): PokemonListDTOResult[] {
    const filterValue = this.pokemonName.value;
    return this.pokemonList
    .filter(pokemon => pokemon.name.includes(filterValue));
  }


}
