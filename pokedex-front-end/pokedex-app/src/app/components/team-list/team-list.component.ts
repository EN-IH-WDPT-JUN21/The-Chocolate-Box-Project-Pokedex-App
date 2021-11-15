import { Component, OnInit } from '@angular/core';
import { TeamDTO } from 'src/app/models/team-model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teamList: TeamDTO[];


  constructor(private teamService: TeamService) {
    this.teamList = [];
   }

  ngOnInit(): void {
    this.loadTeams();
  }


  loadTeams() {
    this.teamService.getAllTeams().subscribe(result => {
      this.teamList = result;
    })
  }

}
