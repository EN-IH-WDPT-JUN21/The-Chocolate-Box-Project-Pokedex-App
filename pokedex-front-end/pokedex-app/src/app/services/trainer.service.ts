import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  readonly baseURL:string = "http://localhost:4200/api/v1/trainers"; // add the readonly attribute

  constructor(
    private http:HttpClient
  ) { }

  getTrainer(): Observable<any> {
    return this.http.get<any>(this.baseURL + '/');
   }
}
