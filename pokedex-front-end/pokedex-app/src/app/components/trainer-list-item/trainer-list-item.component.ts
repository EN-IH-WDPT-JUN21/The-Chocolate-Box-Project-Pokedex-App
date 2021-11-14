import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trainer } from 'src/app/models/trainer-model';

@Component({
  selector: 'app-trainer-list-item',
  templateUrl: './trainer-list-item.component.html',
  styleUrls: ['./trainer-list-item.component.css']
})
export class TrainerListItemComponent implements OnInit {

  @Input()
  trainer!: Trainer;

  @Output() trainerRemoved: EventEmitter<number> = new EventEmitter();

  @Input() position!:number;

  constructor() { }

  ngOnInit(): void {
  }

  removeTrainer(position:number):void {
    this.trainerRemoved.emit(position);
  }

}
