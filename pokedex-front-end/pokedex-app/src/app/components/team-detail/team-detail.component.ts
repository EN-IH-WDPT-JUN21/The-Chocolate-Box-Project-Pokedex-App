import { TrainerService } from './../../services/trainer.service';
import { PokemonService } from './../../services/pokemon.service';
import { PokemonDTO } from 'src/app/models/pokemon-model';
import { TeamService } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { TeamDTO } from 'src/app/models/team-model';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainerDTO } from 'src/app/models/trainer-model';

@Component({
  selector: 'team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team!:TeamDTO;
  result:any;
  pokemonList: PokemonDTO[];
  trainer!: TrainerDTO;
  trainerList!:TrainerDTO[];
  pokemon!: PokemonDTO;
  validPokemon:boolean = false;
  validTrainers: boolean = false;
  validTrainer: boolean = false;
  searchLabel:string = "Search Pokemon"


  // statButtonText: string = "Show Stats";
  // showStats:boolean = false;

  constructor(private teamService:TeamService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private pokemonService:PokemonService,
    private trainerService:TrainerService) {
      this.pokemonList = [];
     }

  ngOnInit(): void {
    const teamId:number = this.activatedRoute.snapshot.params['teamId'];
    this.showTeam(teamId);
  }

  showTeam(id:number){
    this.teamService.getTeamById(id).subscribe(result => {
      this.team = result
      this.getPokemonList();
      this.getTrainer();
      this.getTrainers();
    })
  };

  getPokemonList(){
    this.pokemonService.getPokemonDTObyId(this.team.pokemonId1).subscribe((result: PokemonDTO) => 
      this.pokemonList.push(result))
    this.pokemonService.getPokemonDTObyId(this.team.pokemonId2).subscribe((result: PokemonDTO) =>
      this.pokemonList.push(result))
    this.pokemonService.getPokemonDTObyId(this.team.pokemonId3).subscribe((result: PokemonDTO) =>
      this.pokemonList.push(result))
    this.pokemonService.getPokemonDTObyId(this.team.pokemonId4).subscribe((result: PokemonDTO) =>
      this.pokemonList.push(result))
    this.pokemonService.getPokemonDTObyId(this.team.pokemonId5).subscribe((result: PokemonDTO) =>
      this.pokemonList.push(result))
    this.pokemonService.getPokemonDTObyId(this.team.pokemonId6).subscribe((result: PokemonDTO) =>
      this.pokemonList.push(result))
  }

  getTrainers(){
    this.trainerService.getTrainers().subscribe(result => {
    this.trainerList = result;
    if(this.trainerList.length < 1){this.validTrainers=false}
      else {
        this.validTrainers = true;
      }
    },
    (error) => {
      console.error('Error Found When Searching')
      this.validTrainers = false;
    })
  }

  getTrainer(){
    this.trainerService.getTrainerById(this.team.trainerId).subscribe(result => {
      this.trainer = result;
      this.validTrainer = true;},
    (error) => {
      console.error('Error Found When Searching')
      this.validTrainer = false;
    })
  }

  selectTrainer(selectedTrainer: any): void {
    this.validTrainer = true;
    this.trainer = selectedTrainer;
  }

  saveChanges():void {
    this.team.pokemonId1 = this.pokemonList[0].id;
    this.team.trainerId = this.trainer.id;
    if(this.pokemonList.length > 1){
      this.team.pokemonId2 = this.pokemonList[1].id;
    }else{
      this.team.pokemonId2 = null;
      this.team.pokemonId3 = null;
      this.team.pokemonId4 = null;
      this.team.pokemonId5 = null;
      this.team.pokemonId6 = null;
    }
    if(this.pokemonList.length > 2){
      this.team.pokemonId3 = this.pokemonList[2].id;
    }else{
      this.team.pokemonId3 = null;
      this.team.pokemonId4 = null;
      this.team.pokemonId5 = null;
      this.team.pokemonId6 = null;
    }
    if(this.pokemonList.length > 3){
      this.team.pokemonId4 = this.pokemonList[3].id;
    }else{
      this.team.pokemonId4 = null;
      this.team.pokemonId5 = null;
      this.team.pokemonId6 = null;
    }
    if(this.pokemonList.length > 4){
      this.team.pokemonId5 = this.pokemonList[4].id;
    } else{
      this.team.pokemonId5 = null;
      this.team.pokemonId6 = null;
    }
    if(this.pokemonList.length > 5){
      this.team.pokemonId6 = this.pokemonList[5].id;
    } else{
      this.team.pokemonId6 = null;
    }
    this.teamService.editTeam(this.team).subscribe(result => {
      console.log(result);
      alert("Edited Successfully")
    })
  }

  deleteTeam():void {
    this.teamService.deleteTeam(this.team.id).subscribe(result =>
      alert("Deleted Successfully"))
  }

  removePokemon(id:number) {
    this.pokemonList.splice(id, 1);
  }

  onSearch(pokemonName: any) {
    this.pokemonService.getPokemonDTObyName(pokemonName).subscribe(result => {
      this.pokemon = result;
      this.validPokemon = true;
    },
      (error) => {
        console.error('Error Found When Searching')
        this.validPokemon = false;
      })
  }

  addPokemon(): void {
    if (this.pokemonList.length < 6 && this.validPokemon){
      this.pokemonList.push(this.pokemon)
    }
  }

  goBack():void{
    this.router.navigate(['teams'])
  }

}
