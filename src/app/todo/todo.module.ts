import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './components/task/task.component';


@NgModule({
  declarations: [
    HomeComponent,
    InputComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
