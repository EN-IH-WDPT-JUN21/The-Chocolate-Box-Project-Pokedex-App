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
      console.log(this.pokemonList)
  }

  getTrainer(){
    this.trainerService.getTrainerById(this.team.trainerId).subscribe(result => 
      this.trainer = result)
  }



}
