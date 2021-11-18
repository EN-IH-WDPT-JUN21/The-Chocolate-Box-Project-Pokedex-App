import { TeamDTO } from './../models/team-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  readonly teamURL: string = "http://localhost:8100/api/v1/teams"

  constructor(
    private http: HttpClient
  ) { }

  getAllTeams(): Observable<any> {
    return this.http.get<any>(this.teamURL);
  }

  getTeamById(id: number): Observable<any> {
    return this.http.get<any>(this.teamURL + "/" + id);
  }

  addTeam(team: Object): Observable<Object> {
    return this.http.post(`${this.teamURL}`, team);
  }

  deleteTeam(id: number): Observable<any> {
    return this.http.delete(this.teamURL + "/" + id)
  }

  editTeam(teamDTO: TeamDTO): Observable<any> {
    return this.http.put(`${this.teamURL + "/" + teamDTO.id + "/edit"}`, teamDTO)
  }
}
