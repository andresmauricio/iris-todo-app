import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/ITask';
import { TaskService } from '../../services/task.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = taskService.tasks;
  }

  ngOnInit(): void {}

  addTask(task: string) {
    const newTask: Task = {
      name: task,
      status: false,
      id: uuidv4(),
    };
    this.taskService.addTask(newTask);
  }

  chageState(id: string) {
    console.log(id);
    
    this.taskService.updateTask(id);
  }
}
