import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trainer } from 'src/app/models/trainer-model';

@Component({
  selector: 'app-trainer-list-item',
  templateUrl: './trainer-list-item.component.html',
  styleUrls: ['./trainer-list-item.component.css']
})
export class TrainerListItemComponent implements OnInit {

  isButtonClicked=false;
  panelOpenState = false;

  @Input()
  trainer!: Trainer;

  @Output() trainerRemoved: EventEmitter<number> = new EventEmitter();

  @Input() trainerId!:number;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTrainer(trainerId:number):void {
    this.trainerRemoved.emit(trainerId);
  }

  trainerDetails(trainerId: number){
    if(this.isButtonClicked) {
      this.isButtonClicked=false;
    } else {
      this.isButtonClicked=true;
    }
  }

}
