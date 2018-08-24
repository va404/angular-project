import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CreateTaskModel } from '../models/create.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  bindingModel : CreateTaskModel

  constructor(
    private taskService : TaskService,
    private toastr : ToastrService,
    private router : Router
  ) {
    this.bindingModel = new CreateTaskModel('', '', '');
  }

  create() {
    this.taskService.createTask(
      this.bindingModel).subscribe(() => {
        this.toastr.success('Task created successfully!')
        this.router.navigate(['/components/list-tasks'])
      })
  }

  ngOnInit() {
  }

}
