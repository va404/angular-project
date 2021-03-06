import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ExpiredTasksComponent } from './expired-tasks/expired-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';

import { EditTaskComponent } from './edit-task/edit-task.component';
import { FormsModule } from '@angular/forms';
import { ComponentsRouting } from './components-routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRouting
  ],
  declarations: [
    ListTasksComponent, 
    TaskDetailsComponent, 
    ExpiredTasksComponent, 
    CreateTaskComponent, 
    HomeComponent,
    EditTaskComponent]
})
export class ComponentsModule { }
