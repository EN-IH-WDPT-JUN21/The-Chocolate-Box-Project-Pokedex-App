import { Trainer } from 'src/app/models/trainer-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() {
    this.name = new FormControl('', [Validators.required]);
    this.hobby = new FormControl('', [Validators.required]);
    this.age = new FormControl('', [Validators.required, Validators.min(1)]);
    this.photo = new FormControl('');
    this.favouritePokemonId = new FormControl('');
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
  }

  onSubmit(){
    // Call POST method from trainer-service
    this.trainerList.push(this.registerForm.value);
  }

  // Remove trainer: Add delete route

}
