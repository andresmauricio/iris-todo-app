import { Injectable } from '@angular/core';
import { Task } from 'src/app/shared/models/ITask';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks: Task[] = [];
  constructor() {
    this.tasks = [
      { status: true, name: 'Desarrollar componente tabla Vue.js', id: '1' },
      { status: false, name: 'Relizar ibntegración Paypal', id: '2' },
      { status: true, name: 'Levantar requisitos nuevos', id: '3' },
    ]
  }

  addTask(task: Task) {
    this.tasks.push(task);    
  }

  updateTask(id: string) {}

  deleteTask(id: string) {}
}
