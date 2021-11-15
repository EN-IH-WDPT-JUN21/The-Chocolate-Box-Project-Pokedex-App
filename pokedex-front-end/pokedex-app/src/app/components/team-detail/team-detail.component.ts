import { TeamService } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { TeamDTO } from 'src/app/models/team-model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team!:TeamDTO;
  result:any;

  constructor(private teamService:TeamService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const teamId:number = this.activatedRoute.snapshot.params['teamId'];
    this.showTeam(teamId);
  }

  showTeam(id:number){
    this.teamService.getTeamById(id).subscribe(result => 
      this.team = result
    )
  };



}
