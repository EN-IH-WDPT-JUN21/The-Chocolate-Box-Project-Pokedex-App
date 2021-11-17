import { PokemonService } from './../../services/pokemon.service';
import { TeamService } from './../../services/team.service';
import { TeamDTO } from './../../models/team-model';
import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team-model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'team-list-item',
  templateUrl: './team-list-item.component.html',
  styleUrls: ['./team-list-item.component.css']
})
export class TeamListItemComponent implements OnInit {

  @Input()
  team!:TeamDTO;

  rippleColor:string = "eea29a"

  backUpImage: string = "https://tellusdaily.com/wp-content/uploads/2021/02/60.jpeg";
  

  constructor() {}

  ngOnInit(): void {
  }
  
  
  
}
