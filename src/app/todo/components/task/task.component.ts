import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/shared/models/ITask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() changeStatus = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  change(id: string) {
    this.changeStatus.emit(id);
  }
}
