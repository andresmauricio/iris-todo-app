import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    HomeComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule
  ]
})
export class TodoModule { }
