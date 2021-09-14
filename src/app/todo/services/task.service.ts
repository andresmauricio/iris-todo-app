import { Injectable } from '@angular/core';
import { Task } from 'src/app/shared/models/ITask';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks: Task[] = [];
  public filterTask: Task[] = [];
  constructor() {
    this.tasks = [
      { status: false, name: 'Desarrollar componente tabla Vue.js', id: '1' },
      { status: false, name: 'Relizar ibntegración Paypal', id: '2' },
      { status: true, name: 'Levantar requisitos nuevos', id: '3' },
    ];
    this.filterTask = this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateTask(id: string) {
    this.tasks.forEach((task) => {
      if (task.id === id) task.status = !task.status;
    });
  }

  deleteTask(id: string) {
    for (let index = 0; index < this.tasks.length; index++) {
      if (this.tasks[index].id === id) {
        this.tasks.splice(index, 1);
      }
    }
  }

  filterTaskForOptions(option: 'ALL' | 'COMPLETED' | 'IN PROGRESS') {
    switch (option) {
      case 'ALL':
        this.tasks = this.filterTask;
        break;
      case 'COMPLETED':
        const completed = this.filterTask.filter((task) => task.status);
        this.tasks = completed;
        break;
      case 'IN PROGRESS':
        const inProgress = this.filterTask.filter((task) => !task.status);
        this.tasks = inProgress;
        break;
    }
  }
}
