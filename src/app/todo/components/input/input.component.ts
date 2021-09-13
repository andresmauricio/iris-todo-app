import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Output() sendTask = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  addTask(task?: string) {
    if (task) this.sendTask.emit(task);
  }
}
