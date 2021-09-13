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
    ];
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateTask(id: string) {
    this.tasks.forEach((task) => {
      if (task.id === id) task.status = !task.status;
    });
    console.log(this.tasks);
  }

  deleteTask(id: string) {
    for (let index = 0; index < this.tasks.length; index++) {
      if (this.tasks[index].id === id) {
        console.log(index);

        this.tasks.splice(index, 1);
      }
    }
    console.log(this.tasks);
    
  }
}
