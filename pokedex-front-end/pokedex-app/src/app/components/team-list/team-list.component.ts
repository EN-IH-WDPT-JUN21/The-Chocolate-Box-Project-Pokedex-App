import { TrainerService } from './../../services/trainer.service';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamDTO } from 'src/app/models/team-model';
import { TeamService } from 'src/app/services/team.service';
import { PokemonDTO } from 'src/app/models/pokemon-model';
import { TrainerDTO } from 'src/app/models/trainer-model';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {


  teamList: TeamDTO[];

  addTeamForm: FormGroup;
  name: FormControl;
  photo: FormControl;
  trainerId: FormControl;
  pokemonId1!: number;
  pokemonId2!: number;
  pokemonId3!: number;
  pokemonId4!: number;
  pokemonId5!: number;
  pokemonId6!: number;
  pokemonList: PokemonDTO[];

  trainer!: TrainerDTO;
  trainerList!: TrainerDTO[];

  addButton: boolean = false;
  addButtonText: string = "Add Team";

  pokemon!: PokemonDTO;
  validPokemon: boolean = false;
  pokemonSlot: number = 1;
  disableSearch: boolean = true;
  searchLabel:string = "Search Pokemon"
  

  constructor(private teamService: TeamService,
    private router:Router, 
    private pokemonService: PokemonService,
    private trainerService:TrainerService) {
    this.teamList = [];
    this.name = new FormControl('', [Validators.required]);
    this.photo = new FormControl('', [Validators.required]);
    this.trainerId = new FormControl('', [Validators.required]);
    this.pokemonList = [];

    this.addTeamForm = new FormGroup({
      name: this.name,
      photo: this.photo,
      trainerId: this.trainerId,
    })
   }

  ngOnInit(): void {
    this.loadTeams();
    this.getTrainers();
  }


  loadTeams() {
    this.teamService.getAllTeams().subscribe(result => {
      this.teamList = result;
    })
  }

  async addTeam():Promise<void> {
    let teamDTO:TeamDTO = {
      id: 0,
      name: this.name.value,
      photo: this.photo.value,
      trainerId: this.trainerId.value,
      pokemonId1: this.pokemonId1,
      pokemonId2: this.pokemonId2,
      pokemonId3: this.pokemonId3,
      pokemonId4: this.pokemonId4,
      pokemonId5: this.pokemonId5,
      pokemonId6: this.pokemonId6,
    }
    this.teamService.addTeam(teamDTO).subscribe(result => 
      console.log(result))
  }

  getTrainers() {
    this.trainerService.getTrainers().subscribe(result =>
      this.trainerList = result)
  }

  async onSubmit():Promise<void>{
      await this.addTeam();
      alert("Team Created Successfull")
      this.reloadComponent();
  }

  reloadComponent():void{
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  hideAddButton(): void {
    if (!this.addButton) {
      this.addButton = true;
      this.addButtonText = "Hide Form"
    } else {
      this.addButton = false;
      this.addButtonText = "Add Team"
    }
  }

  onSearch(pokemonName: any) {
    this.pokemonService.getPokemonDTObyName(pokemonName).subscribe( result => {
      this.pokemon = result;
      this.validPokemon = true;
    },
    (error) => {
      console.error('Error Found When Searching')
      this.validPokemon = false;
    })
  }

  addPokemon():void {
    if(!this.validPokemon){
       window.alert("Invalid Pokemon Name")
    }else {
    if(this.pokemonSlot == 1 && this.validPokemon){
      this.pokemonId1 = this.pokemon.id;
      this.pokemonList.push(this.pokemon);
      this.pokemonSlot++
    } else if (this.pokemonSlot == 2) {
      this.pokemonList.push(this.pokemon)
      this.pokemonSlot++
    } else if (this.pokemonSlot == 3) {
      this.pokemonId3 = this.pokemon.id;
      this.pokemonList.push(this.pokemon)
      this.pokemonSlot++
    } else if (this.pokemonSlot == 4) {
      this.pokemonId4 = this.pokemon.id;
      this.pokemonList.push(this.pokemon)
      this.pokemonSlot++
    } else if (this.pokemonSlot == 5) {
      this.pokemonId5 = this.pokemon.id;
      this.pokemonList.push(this.pokemon)
      this.pokemonSlot++
    } else if (this.pokemonList.length == 5) {
      this.pokemonId6 = this.pokemon.id;
      this.pokemonList.push(this.pokemon)
    }
  }
  }

  removePokemon():void{
    if(this.pokemonSlot >= 1){
    this.pokemonList.splice(this.pokemonSlot - 2, 1);
    if(this.pokemonSlot > 1){
    this.pokemonSlot--
    }
    }
  }

}
