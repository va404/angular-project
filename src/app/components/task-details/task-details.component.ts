import { Component, OnInit } from '@angular/core';
import { ListTasks } from '../models/task-list.model';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateTaskModel } from '../models/create.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

task : ListTasks  
id : string

  constructor(
    private taskService : TaskService,
    private route : ActivatedRoute,
    private router : Router,
    private toastr : ToastrService
    
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    
    this.taskService.viewDetails(this.id)
      .subscribe(data => {
      this.task = data
    })
  }

  delete() {
    this.taskService.deleteTask(this.id).subscribe(data => {
      this.toastr.success('Task deleted successfully!')
      this.router.navigate(['components/list-tasks'])
    })
     
  }
}
