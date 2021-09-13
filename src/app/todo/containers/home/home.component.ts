import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public tasks = [
    { status: true, name: 'Desarrollar componente tabla Vue.js', id: "1" },
    { status: false, name: 'Relizar ibntegración Paypal', id: "2" },
    { status: true, name: 'Levantar requisitos nuevos', id: "3" },
  ];
  constructor() {}

  ngOnInit(): void {}

  addTask(task: string) {
    console.log(task);
  }
}
