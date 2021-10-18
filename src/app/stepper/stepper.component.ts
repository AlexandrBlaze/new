import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() public questionsList:{ title: string, answer: string}[];
  @Output() pollComplete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onPollComplete() {
    this.pollComplete.emit(this.questionsList);
  }

}
