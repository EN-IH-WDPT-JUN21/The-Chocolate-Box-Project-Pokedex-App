import { TrainerService } from './../../services/trainer.service';
import { Trainer, TrainerDTO } from 'src/app/models/trainer-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  registerForm: FormGroup;
  name: FormControl;
  hobby: FormControl;
  age: FormControl;
  photo: FormControl;
  favouritePokemonId: FormControl;

  trainerList: Trainer[];

  constructor(private trainerService : TrainerService, private router:Router) {
    this.name = new FormControl('', [Validators.required]);
    this.hobby = new FormControl('', [Validators.required]);
    this.age = new FormControl('', [Validators.required, Validators.min(1)]);
    this.photo = new FormControl('https://www.seekpng.com/png/detail/242-2421423_pokemon-trainer-sprite-png-pixel-pokemon-trainer-sprites.png');
    this.favouritePokemonId = new FormControl('', [Validators.min(1), Validators.max(898)]);
    this.trainerList = [];

    this.registerForm = new FormGroup({
      name: this.name,
      hobby: this.hobby,
      age: this.age,
      photo: this.photo,
      favouritePokemonId: this.favouritePokemonId
    })
   }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.trainerService.getTrainers().subscribe(
      result=>{
        this.trainerList = result;
      }
    )
  }

  onSubmit(){
    this.createTrainer();
    this.reloadComponent();
  }

  createTrainer(): void {
    let trainerDTO: TrainerDTO = {
      id: 0,
      name: this.name.value,
      age: this.age.value,
      hobby: this.hobby.value,
      photo: this.photo.value,
      favouritePokemonId: this.favouritePokemonId.value,
      teamId: 0
    }
    this.trainerService.createTrainer(trainerDTO).subscribe(result =>
      console.log(result))
  }

  reloadComponent():void{
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  deleteTrainer(id: number) {
    this.trainerService.deleteTrainer(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}
