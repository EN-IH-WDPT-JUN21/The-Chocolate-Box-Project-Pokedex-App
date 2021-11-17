import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from '../models/trainer-model';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  readonly baseUrl:string = "http://localhost:8000/api/v1/trainers"; // add the readonly attribute

  constructor(
    private http:HttpClient
  ) { }

  getTrainers(): Observable<any> {
    return this.http.get<Trainer[]>(`${this.baseUrl}`);
   }

  getTrainerById(id: number):Observable<any> {
     return this.http.get<Trainer>(`${this.baseUrl}/${id}`);
   }

  createTrainer(trainer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, trainer);
  }

  deleteTrainer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
